const glossary_indexes = document.querySelectorAll('[data-index]');
const glossary_sections = [...glossary_indexes].reduce((acc, curr) => {
  return {
    ...acc,
    [curr.dataset.index]: document.getElementById(curr.dataset.index),
  };
}, {});

glossary_indexes.forEach((index) => {
  index.addEventListener('click', () => {
    Object.keys(glossary_sections).forEach((section_index) => {
      const cur_el = glossary_sections[section_index];
      
      
      section_index === index.dataset.index || index.dataset.index === "ALL"
        ? cur_el.style.display = "block"
        : cur_el.style.display = "none";
    });
  });
});