import { Banner, Container } from "./styles";
import { OffersCarousel, CategoryCarousel } from "../../components";
export function Home() {

    return (
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>

            <Container>
                <div>
                    <CategoryCarousel />
                    <OffersCarousel />
                </div>
            </Container>

        </main>

    )
}