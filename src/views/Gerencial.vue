<template>

  <div>
    <el-header style="text-align: left; font-size:
      12px; margin: 0px; height: 32px; line-height: 42px">
      <span class="title_page_body">Gerencial | Estatistica</span>
    </el-header>

    <el-main>
      <b-container
        class="bv-example-row"
        style="background: #ffffff;"
      >
        <div style="padding: 50px 0 50px 0">
          <b-row
            align-h="center"
            style="margin-bottom: 20px"
          >
            <span class="txt_title_gerencial">Gerencial</span>
          </b-row>
          <b-row
            align-h="end"
            style="margin-right: 20px"
          >
            <span class="text_infos">O que quer fazer</span>
          </b-row>
          <b-card
            no-body
            style="padding: 0 0 50px 0;"
          >
            <b-tabs
              v-model="tabIndex"
              justified
              card
            >
              <b-tab
                title="Pagamento"
                active
              >

                <b-card>
                  <TabItem
                    :value="valuePagamento"
                    :dataGraphic="dataGraphicPagamento"
                  ></TabItem>

                </b-card>

              </b-tab>
              <b-tab title="Lucro">
                <b-card>
                  <TabItem
                    :value="valuePagamento"
                    :dataGraphic="dataGraphicPagamento"
                  ></TabItem>

                </b-card>
              </b-tab>
              <b-tab title="Fluxo de caixa">
                <b-card>
                  <TabItem
                    :value="valuePagamento"
                    :dataGraphic="dataGraphicPagamento"
                  ></TabItem>

                </b-card>
              </b-tab>
              <b-tab title="Controle de cheque">
                <b-card>
                  <TabItem
                    :value="valuePagamento"
                    :dataGraphic="dataGraphicPagamento"
                  ></TabItem>

                </b-card>
              </b-tab>
              <b-tab title="Compras">
                <b-card>
                  <TabItem
                    :value="valuePagamento"
                    :dataGraphic="dataGraphicPagamento"
                  ></TabItem>

                </b-card>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>

        <!-- <b-row align-h="center">
          <b-col cols="4">
        <bars
          :data="dataGraphic"
          :gradient="['#00FFFF', '#FF00FF']"
          :barWidth="5"
          :width="400"
          :height="200"
          :growDuration="1"
        >
        </bars>
        </b-col>
      </b-row> -->
      </b-container>
    </el-main>
  </div>
</template>

<script>
import TabItem from '../components/TabItem.vue';

export default {
  components: {
    TabItem,
  },
  data() {
    return {
      valuePagamento: '1.511.213.52',
      dataGraphicPagamento: [
        { value: 12, title: 'Jan' },
        { value: 1300, title: 'Fev' },
        { value: 600, title: 'Mar' },
        { value: 855, title: 'Abril' },
        { value: 7800, title: 'Maio' },
        { value: 125, title: 'Jun' },
        { value: 1588, title: 'Jul' },
        { value: 5465, title: 'Ago' },
        { value: 4577, title: 'Set' },
        { value: 7855, title: 'Out' },
        { value: 6588, title: 'Nov' },
        { value: 1000, title: 'Dez' },
      ],
    };
  },
};
</script>
