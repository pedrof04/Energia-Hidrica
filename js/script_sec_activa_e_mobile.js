    
    const navList = document.getElementById('nav-list');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    const spans = document.querySelectorAll('#hamburger span');

    // --- Funções para o MENU MOBILE ---
    function toggleMenu() {
        navList.classList.toggle('active');
        spans.forEach(span => span.classList.toggle('open'));
    }

    function closeMenu() {
        navList.classList.remove('active');
        spans.forEach(span => span.classList.remove('open'));
    }

    navItems.forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });


    // --- Deteção da SEÇÃO ATIVA ---
    const changeActiveSec = () => {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop; //onde a seção começa
            const sectionHeight = section.clientHeight; // altura em pixeis
            
            // Verificamos se o scroll atual está dentro da área desta seção
            // O "-100" serve de margem para ativar um pouco antes de chegar ao topo absoluto
            if (window.scrollY >= (sectionTop - 100)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.classList.add("active");
            }
        });
    };

    // Executa ao fazer scroll
    window.addEventListener("scroll", changeActiveSec);
    
    // Executa uma vez ao carregar a página para definir o estado inicial
    window.addEventListener("DOMContentLoaded", changeActiveSec);