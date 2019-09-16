<template>
  <div class="container">
    <el-header style="text-align: left; font-size:
      12px; margin: 0px; height: 32px; line-height: 42px">
      <span class="title_page_body">Gerencial | Estatistica</span>
    </el-header>

    <el-main>
      <b-container>
        <b-row>
          <b-col>
            <Card
              title="Despesa Ordinaria"
              class="item_list_cards"
              v-on:okClick="rota()"
            >
              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_porcent_positive">
                    <i class="el-icon-top "></i>
                    {{txtPorcentagemDespesasOrdinarias}}% </b-card-text>
                  <b-card-text class="text_content_card_body">
                    R$ {{txtDespesasOrdinarias}}</b-card-text>
                </div>
              </div>
            </Card>
          </b-col>

          <b-col>
            <Card
              title="Despesa Extraordinaria"
              class="item_list_cards"
            >
              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_porcent_positive">
                    <i class="el-icon-top"></i>
                    {{txtPorcentagemDespesasExtraordinarias}}% </b-card-text>
                  <b-card-text class="text_content_card_body">
                    R$ {{txtDespesasExtraordinarias}}</b-card-text>
                </div>
              </div>
            </Card>
          </b-col>

          <b-col>
            <Card
              title="Pagamento"
              class="item_list_cards"
            >
              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_porcent_positive">
                    <i class="el-icon-top "></i>{{txtPorcentagemPagamento}}%</b-card-text>
                  <b-card-text class="text_content_card_body">R$ {{txtPagamento}}</b-card-text>
                </div>
              </div>
            </Card>
          </b-col>

          <b-col>
            <Card
              title="Fluxo de caixa"
              class="item_list_cards"
            >
              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_porcent_positive">
                    <i class="el-icon-top "></i>
                    {{txtPorcentagemFluxoDeCaixa}}%
                  </b-card-text>
                  <b-card-text class="text_content_card_body">
                    R$ {{txtFluxoDeCaixa}}%
                  </b-card-text>
                </div>
              </div>
            </Card>
          </b-col>

        </b-row>
      </b-container>

      <!-- Tabela -->
      <table-statistic
        :tableData="tableData"
        v-on:CadastrarDispesa="cadastrarDispesa"
        v-if="!cadastrarOuListar"
      />

      <formulario-tabela-mensal
      v-else
      />


      <b-container style="
        margin-top:
        35px;">
        <b-row>
          <b-col>
            <Card title="Faturamento Geral">

              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_card_body">
                    R$ {{txtFaturamentoGeral}}
                  </b-card-text>
                </div>
              </div>

            </Card>
          </b-col>

          <b-col>
            <Card title="Compras Geral">

              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_card_body">
                    R$ {{txtComprasGeral}}
                  </b-card-text>
                </div>
              </div>

            </Card>
          </b-col>

          <b-col>
            <Card title="Despesas Geral">

              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_card_body">
                    R$ {{txtDespesasGeral}}
                  </b-card-text>
                </div>
              </div>

            </Card>
          </b-col>

          <b-col>
            <Card title="Lucro Geral">

              <div
                slot="body"
                class="mt-3"
              >
                <div class="mt-3">
                  <!-- caso negativo usar classe el-icon-bottom no icon
                e text_content_porcent_negative no card text, fazer metodo responsavel -->
                  <b-card-text class="text_content_card_body">
                    R$ {{txtLucroGeral}}
                  </b-card-text>
                </div>
              </div>

            </Card>
          </b-col>

        </b-row>
      </b-container>
    </el-main>
  </div>

</template>

<script>

import Card from '../components/Card.vue';
import tableStatistic from '../components/TableStatistics.vue';
import formularioTabelaMensal from '../components/FormularioTabelaMensal.vue';

export default {

  name: 'statistic',
  components: {
    Card,
    tableStatistic,
    formularioTabelaMensal,
  },
  data() {
    return {
      cadastrarOuListar: false,
      txtFaturamentoGeral: '1.217.698.38',
      txtComprasGeral: '567.111.21',
      txtDespesasGeral: '33.426.50',
      txtLucroGeral: '603.785.47',
      tableData: [{
        mes: 'Dezembro',
        ordinaria: 'R$ 40.455.00',
        extraordinaria: 'R$ 1.250.00',
        pagamento: 'R$ 21.252.22',
        fluxodecaixa: '45.500.00',
      },
      {
        mes: 'Novembro',
        ordinaria: 'R$ 25.00.00',
        extraordinaria: 'R$ 1..250.00',
        pagamento: 'R$ 2.252.22',
        fluxodecaixa: '5.500.00',
      },
      {
        mes: 'Outubro',
        ordinaria: 'R$ 40.455.00',
        extraordinaria: 'R$ 1.250.00',
        pagamento: 'R$ 21.252.22',
        fluxodecaixa: '45.500.00',
      },
      {
        mes: 'Setembro',
        ordinaria: 'R$ 40.455.00',
        extraordinaria: 'R$ 1.250.00',
        pagamento: 'R$ 21.252.22',
        fluxodecaixa: '45.500.00',
      },
      {
        mes: 'Agosto',
        ordinaria: 'R$ 40.455.00',
        extraordinaria: 'R$ 1.250.00',
        pagamento: 'R$ 21.252.22',
        fluxodecaixa: '45.500.00',
      },
      {
        mes: 'Julho',
        ordinaria: 'R$ 40.455.00',
        extraordinaria: 'R$ 1.250.00',
        pagamento: 'R$ 21.252.22',
        fluxodecaixa: '45.500.00',
      },
      ],
      txtPorcentagemDespesasOrdinarias: '10.5',
      txtDespesasOrdinarias: '3.091.58',
      txtPorcentagemDespesasExtraordinarias: '07.3',
      txtDespesasExtraordinarias: '980.25',
      txtPorcentagemPagamento: '13.8',
      txtPagamento: '17.500.41',
      txtPorcentagemFluxoDeCaixa: '8.7',
      txtFluxoDeCaixa: '35.745.10',
    };
  },
  methods: {
    cadastrarDispesa(event) {
      this.cadastrarOuListar = event;
    },
  },

};
</script>
