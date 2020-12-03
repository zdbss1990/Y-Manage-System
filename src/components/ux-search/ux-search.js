export default {
    props: {
        options_type: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    watch: {
        'search_form.search_type': {
            deep: true,
            handler: function (newV, oldV) {
                if (newV.key !== oldV.key) {
                    this.search_form.value = ''
                }
            },
        }
    },
    data() {
        return {
            search_form: {
                search_type: this.options_type[0],
                value: '',
            }
        }
    },
    methods: {
        //重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.search_form.value = '';
            let emit_data = {
                ...this.search_form.search_type,
                search: this.search_form.value
            }
            this.$emit('resetForm', emit_data)
        },
        //搜索
        searchForm() {
            let emit_data;
            if (this.search_form['search_type']['select_options']) {
                let data = !this.search_form.value ? this.search_form['search_type']['select_options'][0] : this.search_form['search_type']['select_options'].find(item => {
                    return item.id === this.search_form.value
                })
                emit_data = {
                    ...this.search_form.search_type,
                    search: data.name
                }
            } else {
                emit_data = {
                    ...this.search_form.search_type,
                    search: this.search_form.value
                }
            }
            if (!emit_data.search) return
            this.$emit('searchForm', emit_data)
        }
    }
}