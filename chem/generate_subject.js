// generate_all_subjects.js
const fs = require('fs');
const path = require('path');

const subjects = [
  'organic_3',
  'phychem_3',
  'material_chem',
];

function createSubjectFolder(subject) {
  const folderPath = path.join(__dirname, 'data', subject);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁 已建立資料夾：${folderPath}`);
  } else {
    console.log(`⚠ 資料夾已存在：${folderPath}`);
  }

  const jsContent = `
const pageData = {
  title: "${subject}考古題",
  semesters: [
    {
      name: "上學期",
      files: [
        { name: "期中考 I", file: "../midterm_template.html?subject=${subject}&exam=midterm1" },
        { name: "期中考 II", file: "../midterm_template.html?subject=${subject}&exam=midterm2" },
        { name: "期末考", file: "../midterm_template.html?subject=${subject}&exam=midterm3" }
      ]
    },
    {
      name: "下學期",
      files: [
        { name: "期中考 I", file: "../midterm_template.html?subject=${subject}&exam=midterm1b" },
        { name: "期中考 II", file: "../midterm_template.html?subject=${subject}&exam=midterm2b" },
        { name: "期末考", file: "../midterm_template.html?subject=${subject}&exam=finalb" }
      ]
    }
  ]
};
`.trim();

  const jsFilePath = path.join(folderPath, `${subject}.js`);
  fs.writeFileSync(jsFilePath, jsContent, 'utf-8');
  console.log(`✅ 已建立：${jsFilePath}`);
}

subjects.forEach(createSubjectFolder);
