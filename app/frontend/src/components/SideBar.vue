<template>
  <div class="sidebar__container">
    <div class="logo">
      <img src="@/assets/images/Logo.svg" alt="Logo" />
    </div>
    <div class="notas-fiscais">
      <img src="@/assets/images/Vector.svg" alt="Notas Fiscais" />
      <span>Notas Fiscais</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar__container {
  width: 336px;
  height: 100%;
  box-shadow: inset rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  background-color: rgb(251, 253, 254);
  display: flex;
  flex-direction: column;
}

.logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
}

.notas-fiscais {
  border-left: 5px solid rgb(0, 173, 142);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
}

.notas-fiscais span {
  font-weight: 500;
  color: rgb(0, 173, 142);
  margin-left: 1rem;
}
</style>
;
