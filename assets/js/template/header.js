const header = document.querySelector("header");
header.classList.add("header");
header.setAttribute("id", "header");

    const nav_container = document.createElement('nav');
    header.appendChild(nav_container);
    nav_container.classList.add("nav", "container");

        const content = `
                            <a href="#" class="nav__link">
                            <img src="assets/img/logo.png" alt="logo de papel y cristal" class="nav__logo">
                            </a>

                            <div class="nav__menu" id="nav-menu">
                            <ul class="nav__list grid">
                                <li class="nav__item">
                                    <a href="index.html" class="nav__link active-link">
                                        <i class="uil uil-estate nav__icon"></i>
                                        Inicio
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="productos.html" class="nav__link">
                                        <i class="uil uil-shopping-bag nav__icon"></i>
                                        Productos
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="contacto.html" class="nav__link">
                                        <i class="uil uil-message nav__icon"></i>
                                        Contacto
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="iniciar-sesion.html" class="nav__link">
                                        <i class="uil uil-user nav__icon"></i>
                                        Iniciar Sesión
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        <i class="uil uil-search nav__icon"></i>
                                        Busqueda
                                    </a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">
                                        <i class="uil uil-shopping-cart nav__icon"></i>
                                        Carrito
                                    </a>
                                </li>
                            </ul>
                            <i class="uil uil-times nav__close" id="nav-close"></i>
                            </div>

                            <div class="nav__btns">
                            <!--Theme change button-->
                            <i class="uil uil-moon change-theme" id="theme-button"></i>

                            <div class="nav__toggle" id="nav-toggle">
                                <i class="uil uil-apps"></i>
                            </div>
                            </div>      
                        `;
                nav_container.innerHTML = content;
        