import Customizer from "@components/pages/Customizer"
import Home from "@components/pages/Home"
import Canvas from "@components/Canvas"

const Page = () => {
    return (
        <main className="transition-all ease-in">
            <Home />
            <Customizer />
            <Canvas />
        </main>
    )
}

export default Page