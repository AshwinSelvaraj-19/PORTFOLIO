# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases your skills, projects, and provides a way for potential employers or clients to contact you.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎯 Sections for About, Projects, Skills, and Contact
- 📄 Downloadable resume option
- 🔗 Social media integration
- 📝 Contact form
- 🌙 Dark mode design

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css      # Main stylesheet
│   └── animations.css  # Animation styles
├── js/
│   └── main.js        # JavaScript functionality
└── assets/
    └── resume.pdf     # Your resume (add this)
```

## Customization

### 1. Personal Information
- Edit the content in `index.html` to add your personal information
- Update the hero section tagline
- Modify the About Me section with your details
- Add your own projects to the Projects section

### 2. Styling
- Colors can be modified in the `:root` section of `style.css`
- Fonts can be changed by updating the Google Fonts link in `index.html`
- Adjust animations timing in `animations.css`

### 3. Projects
Add your projects by following this template in the Projects section:

```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description</p>
    <div class="project-tech">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
    <div class="project-links">
        <a href="#" class="project-link"><i class="fab fa-github"></i></a>
        <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
    </div>
</div>
```

### 4. Skills
Add or modify skills in the Skills section:

```html
<div class="skill-item">
    <span>Skill Name</span>
    <div class="progress-bar">
        <div class="progress" style="width: XX%"></div>
    </div>
</div>
```

### 5. Social Links
Update the social media links in the footer with your profiles:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/your-profile">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/your-username">
        <i class="fab fa-github"></i>
    </a>
</div>
```

## Setup

1. Clone or download this repository
2. Replace the placeholder content with your information
3. Add your resume to the `assets` folder
4. Update social media links
5. Deploy to your preferred hosting service

## Contact Form

The contact form is currently set up to simulate submission. To make it functional:

1. Create a backend service to handle form submissions
2. Update the form submission code in `main.js`
3. Add your server endpoint to the form action

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)

## License

This project is open source and available under the [MIT License](LICENSE). 