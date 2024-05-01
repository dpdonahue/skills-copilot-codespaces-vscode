function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = member.querySelector('.member__skills');
  const memberSkillsList = memberSkills.querySelector('.member__skills-list');
  const memberSkillsItems = memberSkillsList.querySelectorAll('.member__skills-item');

  memberSkillsItems.forEach(item => {
    item.addEventListener('click', () => {
      memberSkillsItems.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
}