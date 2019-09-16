<template>
  <div>
    <b-card>
      <div>
        <b-container class="bv-example-row form_body bv-example-row-flex-cols">

          <b-row>
            <b-col>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-lancar-despesa"
                    label="Lançamento de despesa"
                    label-for="input-lanca-despesa"
                  >
                    <b-form-input
                      id="input-lanca-despesa"
                      v-model="form.lanca_despesa"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-procurar-despesa"
                    label="Procurar Despesa"
                    label-for="input-procurar-despesa "
                  >
                    <b-form-input
                      id="input-procurar-despesa"
                      v-model="form.procurar_despesa"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col align-self="center">
                  <b-form-group
                    id="input-group-selecionar-despesa"
                    label="Selecionar Despesa"
                    label-for="input-selecionar-despesa"
                  >
                    <b-card
                      no-body
                      class="body_card_nex_page"
                      id="input-selecionar-despesa"
                    >
                      <b-row class="justify-content-md-center">

                        <b-card no-body>
                          <i class="el-icon-arrow-left"></i>
                        </b-card>
                        <b-card no-body>
                          <i class="el-icon-arrow-right"></i>
                        </b-card>

                      </b-row>
                    </b-card>
                  </b-form-group>

                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-origem-despesa"
                    label="Origem da despesa"
                    label-for="input-origem-despesa"
                  >
                    <b-form-select
                      id="input-origem-despesa"
                      v-model="form.origens"
                      :options="origens"
                      required
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-valor-despesa"
                    label="Valor da Despesa"
                    label-for="input-valor-despesa"
                  >
                    <b-form-input
                      id="input-valor-despesa"
                      v-model="form.valor_despesa"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Informações Adicionais"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.info_adicionais"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col
              col
              lg="2"
              class="pb-2"
            >
              <b-button
                size="sm"
                variant="outline-primary"
              >
                <i class="el-icon-plus"></i>
                Add despesa
              </b-button>
            </b-col>
          </b-row>
          <b-row align-h="end">
            <b-col col lg="1">

            <b-button pill variant="outline-danger" >Fechar</b-button>
            </b-col>
            <b-col col lg="1">

            <b-button pill variant="primary" >Salvar</b-button>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        lanca_despesa: '',
        procurar_despesa: '',
        origens: null,
        checked: [],
        valor_despesa: '',
        info_adicionais: '',
      },
      origens: [{ text: 'Origens', value: null }, 'Conta de agua', 'Conta de energia', 'Reparos'],
    };
  },
};
</script>
