const pageData = {
  title: "有機化學 考古題分類",
  professor: "林俊成", // 新增授課教授欄位
  semesters: [
    {
      name: "上學期",
      files: [
        { name: "期中考 I", file: "../midterm_template.html?subject=organic_chem&exam=midterm1" },
        { name: "期中考 II", file: "../midterm_template.html?subject=organic_chem&exam=midterm2" },
        { name: "期末考", file: "../midterm_template.html?subject=organic_chem&exam=midterm3" }
      ]
    },
    {
      name: "下學期",
      files: [
        { name: "期中考 I", file: "../midterm_template.html?subject=organic_chem&exam=midterm1b" },
        { name: "期中考 II", file: "../midterm_template.html?subject=organic_chem&exam=midterm2b" },
        { name: "期末考", file: "../midterm_template.html?subject=organic_chem&exam=finalb" }
      ]
    }
  ]
};
