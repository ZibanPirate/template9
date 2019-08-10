module.exports = {
  scenes: ["main/scenes/landing", "admin/scenes/dashboard", "admin/scenes/dashboard/settings"],
  actions: ["main/actions/lawyers/getLawyers", "main/actions/lawyer/getLawyerBySlug", "main/actions/lawyer/getLawyersByCity", "admin/actions/lawyers"],
  reducers: ["main/reducer/lawyers", "main/reducer/profile", "admin/reducer/lawyers", "admin/reducer/profile"],
  entries: ["main", "admin"],
};
