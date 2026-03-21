import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Title, ContainerItems, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const apiURL = import.meta.env.VITE_API_URL;

    // use fixed local images for categories (do not fetch from backend)
    const imgEntrada = new URL('../../assets/category_1.png', import.meta.url).href;
    const imgHamburguer = new URL('../../assets/category_2.png', import.meta.url).href;
    const imgBebidas = new URL('../../assets/category_3.png', import.meta.url).href;
    const imgSobremesa = new URL('../../assets/category_4.png', import.meta.url).href;

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            setCategories(data);
        }

        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite
                partialVisible={false}
                itemClass="carousel-item"
            >
                {categories.map((category) => {
                    const raw = (category.slug || category.name || '').toString().toLowerCase();
                    let imageSrc = '';

                    if (/entrada/.test(raw)) imageSrc = imgEntrada;
                    else if (/hamburguer|hambúrguer|hamburger|burger|hamburgers?/.test(raw)) imageSrc = imgHamburguer;
                    else if (/bebida|bebidas|drink|drinks/.test(raw)) imageSrc = imgBebidas;
                    else if (/sobremesa|sobremesas|dessert|desserts/.test(raw)) imageSrc = imgSobremesa;
                    else imageSrc = imgEntrada; // default to entrada if no match

                    return (
                        <ContainerItems
                            key={category.id}
                            imageUrl={imageSrc}
                        >
                            <CategoryButton
                                onClick={() => {
                                    navigate({
                                        pathname: "/cardapio",
                                        search: `?categoria=${category.id}`,
                                    });
                                }}
                            >
                                {category.name}
                            </CategoryButton>
                        </ContainerItems>
                    )
                })}
            </Carousel>
        </Container>
    );
}

export default CategoryCarousel;
