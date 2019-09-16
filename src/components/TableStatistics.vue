<template>
  <div>
    <div style="margin-top: 35px; padding: 20px; background: #ffffff;">
      <div class="d-flex justify-content-between d">
        <div class="pesquisa">
          <el-input
            style="margin-bottom: 10px; width: 150px;"
            v-model="search"
            placeholder="Pesquisar"
          >
            <i
              slot="prefix"
              class="el-input__icon el-icon-search"
            ></i>
          </el-input>
        </div>
        <button
          class="btn btn-primary btn-micro"
          @click="emit"
        >Cadastrar</button>
      </div>

      <el-header style="text-align: left; font-size:
      10px; margin: 0px 0px 20px 0px; height: 32px; line-height: 42px">
        <span class="title_page_body">Resultado dados | Mensal</span>
      </el-header>
      <el-table
        :data="tableFilter"
        style="width: 100%"
        height="300"
      >
        <el-table-column label="Estatísticas">
          <el-table-column
            prop="mes"
            label="Mes"
            width="200"
          >
          </el-table-column>
          <el-table-column
            prop="ordinaria"
            label="Ordinarias"
            width="190"
          >
          </el-table-column>
          <el-table-column
            prop="extraordinaria"
            label="Extraordinárias"
            width="300"
          >
          </el-table-column>
          <el-table-column
            prop="pagamento"
            label="Pagamentos"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="fluxodecaixa"
            label="Fluxo de caixa"
            width="150"
          >
          </el-table-column>
        </el-table-column>
      </el-table>

      <span class="text_infos">Saiba como lançar e consulta!</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    tableFilter() {
      return this.tableData.filter(data => !this.search
        || data.mes.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  methods: {
    emit() {
      this.$emit('CadastrarDispesa', true);
    },
  },
};
</script>
