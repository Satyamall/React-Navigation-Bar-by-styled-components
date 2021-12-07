
import styled from "styled-components";

const ToolBar = styled.nav`
    width: 600px;
    height: 50px;
    background: rgb(63,81,181);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    color: rgb(180,180,204);
`;

const SiteName = styled.button`
    border: none;
    background: rgb(55,71,159);
    font-size: 18px;
    color: rgb(182,177,211);
`;

const Drawer=styled.div`
    display: flex;
    gap: 1rem;
    font-size: 16px;
`;

const DrawerItem = ({ label }) => {
    return <div>{label}</div>
}

export default function NavigationBar() {

    return (
        <ToolBar>
            <SiteName>
                <DrawerItem label="Site Name" />
            </SiteName>
            <Drawer>
                <DrawerItem label="About us" />
                <DrawerItem label="Prices" />
                <DrawerItem label="Start Page" />
                <DrawerItem label="Offer" />
                <DrawerItem label="Contact" />
            </Drawer>
        </ToolBar>
    );
}
