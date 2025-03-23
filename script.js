const  menulist = document.getElementById("menulist")
const burgermenu = document.getElementById("burgermenu")

menulist.style.maxHeight="0px";



function toggleMenu (){

    if (menulist.style.maxHeight=="0px") {
  
        menulist.style.maxHeight="350px";
    } else {
        menulist.style.maxHeight="0px";
    }
}

const testimonial = [
    {
      name: "Joren Velas",
      role: "Founder",
      linkText: "Legacy Foundation",
      linkHref: "#",
      imgSrc:"Images/drchrstianphoto.png",
      text: "They captured my luxury wellness vibe perfectly. My brand now feels elevated and effortlessly aligned with my clients"
    },
    {
      name: "Jane Doe",
      role: "CEO",
      linkText: "Visionary Co.",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The process was smooth, creative, and honestly kind of fun. In just a few weeks, I had a complete brand identity that finally felt like me, plus a content strategy that makes showing up online effortless. If you want a brand that actually reflects who you are, Pessoals is the team you need."
    },
    {
      name: "John Smith",
      role: "Tax Advisory",
      linkText: "InnovateX",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
    },
    {
      name: "Anne william",
      role: "Content Creator",
      linkText: "InnovateX",
      linkHref: "#",
      imgSrc: "images/drchristianphoto.jpg",
      text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
    }
  ];

  let Index = 1;

  function showTestimonial(index) {
    const testimonial = testimonial[index];
    document.getElementById('profile-name').textContent = testimonial.name;
    document.getElementById('profile-link').textContent = testimonial.linkText;
    document.getElementById('profile-link').href = testimonial.linkHref;
    document.getElementById('profile-img').src = testimonial.imgSrc;
    document.getElementById('testimonial-text').textContent = testimonial.text;
  }

  function nextTestimonial() {
    currentIndex = (Index + 1) % testimonial.length;
    showTestimonial(Index);
  }

  function prevTestimonial() {
    currentIndex = (Index - 1 + testimonial.length) % testimonial.length;
    showTestimonial(Index);
  }

  const testimonials = [
    {
      name: "Joren Velas",
      role: "Founder",
      linkText: "Legacy Foundation",
      linkHref: "#",
      imgSrc:"https://randomuser.me/api/portraits/men/33.jpg",
      text: "They captured my luxury wellness vibe perfectly. My brand now feels elevated and effortlessly aligned with my clients"
    },
    {
      name: "Jane Doe",
      role: "CEO",
      linkText: "Visionary Co.",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The process was smooth, creative, and honestly kind of fun. In just a few weeks, I had a complete brand identity that finally felt like me, plus a content strategy that makes showing up online effortless. If you want a brand that actually reflects who you are, Pessoals is the team you need."
    },
    {
      name: "Anne william",
      role: "Content Creator",
      linkText: "InnovateX",
      linkHref: "#",
      imgSrc: "https://randomuser.me/api/portraits/men/62.jpg",
      text: "Working with Pessoals was a game-changer for me. They didn’t just design a personal brand—they helped me figure out who I really am and how to show that to the world."
    }
  ];

    let currentIndex = 1;

    function showTestimonial(index) {
      const testimonial = testimonials[index];
      document.getElementById('profile-name').textContent = testimonial.name;
      document.getElementById('profile-link').textContent = testimonial.linkText;
      document.getElementById('profile-link').href = testimonial.linkHref;
      document.getElementById('profile-img').src = testimonial.imgSrc;
      document.getElementById('testimonial-text').textContent = testimonial.text;
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }

    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);


    function openPage() {
      // Replace 'page2.html' with the actual page you want to navigate to
      window.location.href = "drchristianconte.html";  // This will open page2.html in the same tab
  }
