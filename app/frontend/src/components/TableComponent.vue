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
        <th class="table__header">EMISSÃO</th>
        <th class="table__header">VALOR</th>
        <th class="table__header">STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nf" v-for="nf in nfs" :key="nf.id">
        <td>{{ nf.orderNumber }}</td>
        <td>{{ nf.buyer.name }}</td>
        <td>{{ nf.provider.name }}</td>
        <td>{{ nf.emissionDate }}</td>
        <td class="nf__value">R$ {{ nf.value }}</td>
        <td class="nf__status">
          {{ statusConverter[+nf.orderStatusBuyer].toUpperCase() }}
        </td>
        <td class="provider__data">
          <button class="provider">Dados do cedente</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: calc(100% - 96px);
  border-collapse: collapse;
  margin-left: 48px;
  overflow: hidden;
}

table thead tr {
  text-align: left;
}

table th,
table td {
  padding: 12px 15px;
}

table tbody {
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  color: rgb(90, 90, 90);
}

table tbody tr:nth-of-type(even) {
  background-color: rgb(245, 245, 245);
}

table tbody tr:last-of-type {
  border-bottom: 2px solid rgb(0, 173, 142);
}

.table__header {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: rgb(161, 168, 184);
}

.nf {
  border: 1px solid rgb(229, 229, 229);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px 30px;
}

.nf__value,
.nf__status {
  font-size: 14px;
  color: rgb(0, 173, 142);
}

.provider {
  background-color: transparent;
  border: 1px solid rgb(202, 211, 255);
  border-radius: 50px;
  color: rgb(90, 90, 90);
  line-height: 30px;
  text-align: center;
  width: calc(100% - 30px);
}
</style>
