const member = {
  name: "Rizky Ramadhan",
  message: "Testing vue",
  isActive: true,
};
const vm = new Vue({
  el: "#app",
  data: member,
  methods: {
    getName: () => {
      return `Hello, ${this.name}`;
    },
    ubahNama: (namaBaru) => {
      this.name = namaBaru;
    },
  },
});
