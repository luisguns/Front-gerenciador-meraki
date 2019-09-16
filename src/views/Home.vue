<template >
  <el-container
    class="home m"
    style=""
  >

    <el-container>
      <el-header style="page_title">
        <span class="title_page_body">Gerencial | Dados Mês Corrente</span>
      </el-header>

      <el-main>

        <!-- primeira row -->
        <el-row
          :gutter="10"
          class=""
        >
          <el-col :span="16">
            <Card
              title="Financeiro"
              v-on:okClick="rota"
            >
              <div
                class="row el-card_body_with_colum"
                slot="body"
              >
                <div class="col">
                  <b-card-text class="mb-1 text_content_card_body_title">
                    Despesas Ordinárias</b-card-text>
                  <b-card-text class="text_content_card_body">
                    R$ {{dados.despesasOrdinrias}}</b-card-text>
                </div>
                <div class="col">
                  <b-card-text class="mb-1 text_content_card_body_title">
                    Despesas Ordinárias</b-card-text>
                  <b-card-text class="text_content_card_body">
                    R$ {{dados.despesasExtraOrdinarias}}</b-card-text>
                </div>
                <div class="col">
                  <b-card-text class="mb-1 text_content_card_body_title">
                    Pagamentos</b-card-text>
                  <b-card-text class="text_content_card_body">R$ {{dados.pagamentos}}</b-card-text>
                </div>
              </div>
            </Card>
          </el-col>
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              title="Despesas"
            >
              <div
                slot="body"
                class="mt-3"
              >

                <b-card-text class="mt-4 text_content_card_body_whitout_image">
                  R$ {{dados.despesas}}</b-card-text>
              </div>
            </Card>
          </el-col>
        </el-row>

        <!-- Segunda row -->
        <el-row
          :gutter="10"
          style="margin-top: 12px"
          class=""
        >

          <!-- Primeira Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Faturamento"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_porcent_positive"> <i class="el-icon-top ">
                    </i>{{dados.porcentagemFaturamento}}% </b-card-text>
                  <b-card-text class="text_content_card_body">R$ {{dados.faturamento}}</b-card-text>
                </div>

              </div>
            </Card>
          </el-col>

          <!-- Segunda Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Lucro"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">R$ {{dados.lucro}}</b-card-text>
              </div>
            </Card>
          </el-col>

          <!-- Terceira Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Fluxo de caixa (Lucro)"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">
                  R$ {{dados.fluxoDeCaixa}}</b-card-text>

              </div>
            </Card>
          </el-col>

        </el-row>
        <hr>

        <!-- Terceira row -->
        <el-row
          :gutter="10"
          style="margin-top: 12px"
          class=""
        >

          <!-- Primeira Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Historico Vendas de produto"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">
                  R$ {{dados.historicoVendasDeProduto}}</b-card-text>

              </div>
              Use /* eslint-disable */ to ignore all warnings in a file.
            </Card>
          </el-col>

          <!-- Segunda Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Historico de serviço"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">
                  R$ {{dados.historicoDeServico}}</b-card-text>
              </div>
            </Card>
          </el-col>

          <!-- Terceira Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Venda Geral"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">
                  R$ {{dados.vendaGeral}}</b-card-text>

              </div>
            </Card>
          </el-col>

        </el-row>

        <hr>

        <!-- Quarta row -->
        <el-row
          :gutter="10"
          style="margin-top: 12px"
          class=""
        >

          <!-- Primeira Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Controle de Compras"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">
                  R$ {{dados.controleDeCompras}}</b-card-text>

              </div>
            </Card>
          </el-col>

          <!-- Segunda Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="true"
              v-on:graficClick="rotaGrafico"
              title="Controle de Cheque"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body">
                  R$ {{dados.controleDeCheques}}</b-card-text>
              </div>
            </Card>
          </el-col>

          <!-- Terceira Coluna -->
          <el-col :span="8">
            <Card
              v-on:okClick="rota"
              :isImg="False"
              title="Controle de Fornecedor"
            >

              <div
                slot="body"
                class="mt-3"
              >
                <b-card-text class="mt-4 text_content_card_body_whitout_image">
                  R$ {{dados.controlesDeFornecedore}} Fornecedor(es)</b-card-text>

              </div>
            </Card>
          </el-col>

        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'home',
  components: {
    Card,
  },
  data() {
    return {
      dados: {
        despesasOrdinrias: '255',
        despesasExtraOrdinarias: '52315',
        pagamentos: '515',
        despesas: '565656',
        faturamento: '1.217.669.00',
        lucro: '465.560.00',
        fluxoDeCaixa: '603.985.47',
        porcentagemFaturamento: '13,6',
        historicoVendasDeProduto: '140.258.34',
        historicoDeServico: '463527.12',
        vendaGeral: '603.785.47',
        controleDeCompras: '567.111.21',
        controleDeCheques: '69.500.0',
        controlesDeFornecedore: '5',
      },
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      // this.dados = get();
    },
    rota() {
      this.$router.push({ name: 'estatistica' });
    },
    rotaGrafico() {
      this.$router.push({ name: 'gerencial' });
    },
  },

};
</script>
