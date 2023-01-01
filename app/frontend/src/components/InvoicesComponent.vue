<script>
import TableComponentVue from "./TableComponent.vue";
export default {
  name: "InvoicesComponent",
  components: {
    TableComponentVue,
  },
};
</script>

<template>
  <div class="invoice__container">
    <div class="header"></div>
    <div class="invoice__content">
      <img src="@/assets/images/Vector2.svg" alt="Logo" />
      <span>Notas fiscais</span>
    </div>
    <p>Visualize as notas fiscais que voce tem.</p>
    <TableComponentVue />
  </div>
</template>

<style scoped>
.invoice__container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.invoice__container img {
  width: 24px;
  height: 15px;
}

.header {
  background-color: #ffffff;
  border-bottom: 1px solid rgb(218, 218, 218);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px 46px;
  height: 94px;
  width: 100%;
}

.invoice__content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
  margin-left: 48px;
}

.invoice__content img {
  stroke: #021b51;
}

.invoice__content span {
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: rgb(2, 27, 81);
  margin-left: 1rem;
}

.invoice__container p {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(114, 125, 148);
  padding: 7px 0;
  margin-left: 48px;
}
</style>
