import SearchBarComponent from "../../components/search_bar_component/SearchBarComponent";
import FilterComponent from "../../components/select_region_component/FilterComponent";
import { useThemeProvider } from "../../context_data/useThemeProvider";

const LayoutPage = () => {
    const theme = useThemeProvider();
    return (
        <div className="flex flex-col gap-32 " style={theme.theme}>
            <section className="my-28">
                <SearchBarComponent />
            </section>
            <section className="-my-32">
                <FilterComponent />
            </section>
            <main>
                <p className="p-6 text-justify">
                    When you do this while giving to the needy, your deeds are
                    in vain, people’s attention is your reward…clearly your
                    ultimate goal is to exploit someone’s situation to get
                    people’s attention and not to help someone in need, no one
                    that’s going through tough situation wants a camera in their
                    face, you’ll never understand this until you’ve been on the
                    receiving end, do better. When you do this while giving to
                    the needy, your deeds are in vain, people’s attention is
                    your reward…clearly your ultimate goal is to exploit
                    someone’s situation to get people’s attention and not to
                    help someone in need, no one that’s going through tough
                    situation wants a camera in their face, you’ll never
                    understand this until you’ve been on the receiving end, do
                    better. When you do this while giving to the needy, your
                    deeds are in vain, people’s attention is your reward…clearly
                    your ultimate goal is to exploit someone’s situation to get
                    people’s attention and not to help someone in need, no one
                    that’s going through tough situation wants a camera in their
                    face, you’ll never understand this until you’ve been on the
                    receiving end, do better.
                </p>
            </main>
        </div>
    );
};

export default LayoutPage;
