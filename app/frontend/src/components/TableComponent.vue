<script>
import { getNfs } from "../services/api";
import moment from "moment";
export default {
  name: "TableComponent",
  data() {
    return {
      nfs: [],
      statusConverter: [
        "Pendente de confirmação",
        "Pedido confirmado",
        "Não reconhece o pedido",
        "Mercadoria não recebida",
        "Recebida com avaria",
        "Devolvida",
        "Recebida com devolução parcial",
        "Recebida e confirmada",
        "Pagamento Autorizado",
      ],
    };
  },
  methods: {
    async getNfs() {
      const response = await getNfs();
      this.nfs = response.data;
      this.nfs.forEach((nf) => {
        nf.emissionDate = moment(nf.emissionDate).format("DD/MM/YYYY");
      });
    },
  },
  created() {
    this.getNfs();
  },
};
</script>

<template>
  <table class="table">
    <thead class="header">
      <tr>
        <th class="table__header">NOTA FISCAL</th>
        <th class="table__header">SACADO</th>
        <th class="table__header">CEDENTE</th>
        <th class="table__header">EMISSAO</th>
        <th class="table__header">VALOR</th>
        <th class="table__header">STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nf" v-for="nf in nfs" :key="nf.id">
        <td>{{ nf.nNf }}</td>
        <td>{{ nf.buyer.name }}</td>
        <td>{{ nf.provider.name }}</td>
        <td>{{ nf.emissionDate }}</td>
        <td>R$ {{ nf.value }}</td>
        <td>{{ statusConverter[+nf.orderStatusBuyer] }}</td>
        <td class="provider">Dados do cedente</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 90%;
  border-collapse: collapse;
  margin-left: 48px;
}

.table {
  margin-top: 20px;
  margin-left: 48px;
}

.header {
  padding: 10px;
}

.table__header {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: rgb(161, 168, 184);
}

tbody :nth-child(n) {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px 30px;
}

.provider {
  border-radius: 10px;
  
}
</style>
