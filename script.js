const projectDetails = document.querySelectorAll('.see-project-btn');

const projects = [
    {
      id: 1,
      name: 'Tonic',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      featured_image: './Images/work-one-img.jpg',
      link_to_live: ['See live', './Images/detailProjectLive.png'],
      link_to_source: ['See source', './Images/detailProjectGit.png'],
      technologies: ['html', 'css', 'javaScript'],
      name_detail: ['CANOPY', 'Back End Dev', '2015'],
    },
    {
      id: 2,
      name: 'Multi-Post Stories',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      featured_image: './Images/work-two-img.jpg',
      link_to_live: ['See live', './Images/detailProjectLive.png'],
      link_to_source: ['See source', './Images/detailProjectGit.png'],
      technologies: ['html', 'css', 'javaScript'],
      name_detail: ['CANOPY', 'Back End Dev', '2015'],
    },
  ];

  projectDetails.forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedProject = projects.filter((project) => project.id === e.target.id)[0];
      mainTag.classList.add('fixed_postion');
      projectDetail.classList.add('active');
      projectDetail.innerHTML = 
              `<div class="project-detail-header">
                <h3>${selectedProject.name}</h3>
                <button data-close-button class="close-button-project">&times;</button>
             </div>`;
    });
});
