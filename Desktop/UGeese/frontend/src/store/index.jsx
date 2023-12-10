import { GooseAvatar } from "../shared/Avatars";

 import { Alert, Avatar, Card } from 'antd';
 import './index.css'
 import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
 import Modal from "./Modal";
 import { useState } from "react";
 const { Meta } = Card;

 export default function Store() {
     const [modal, setModal] = useState(false)
     return (
       <div className="store">
         <h1>Store</h1>
         <div className="store_cards">
           <Card
             style={{
               width: 300,
             }}
             cover={<GooseAvatar name="determined" size={180} />}
             actions={[
               <ShoppingCartOutlined
                 key="setting"
                 onClick={() => setModal(true)}
               />,
               <EyeOutlined key="edit" />,
             ]}
           >
             <Meta title="Determined Goose" description="500 coins" />
           </Card>

           <Card
             style={{
               width: 300,
             }}
             cover={<GooseAvatar name="engineer" size={180} />}
             actions={[
               <ShoppingCartOutlined
                 key="setting"
                 onClick={() => setModal(true)}
               />,
               <EyeOutlined key="edit" />,
             ]}
           >
             <Meta title="Engineer Goose" description="100 coins" />
           </Card>
           <Card
             style={{
               width: 300,
             }}
             cover={ <GooseAvatar name="graduate" size={180}/>}
             actions={[
               <ShoppingCartOutlined
                 key="setting"
                 onClick={() => setModal(true)}
               />,
               <EyeOutlined key="edit" />,
             ]}
           >
             <Meta title="Graduate Goose" description="200 coins" />
           </Card>
           <Card
             style={{
               width: 300,
             }}
             cover={<GooseAvatar name="pilot" size={180}/>}
             actions={[
               <ShoppingCartOutlined
                 key="setting"
                 onClick={() => setModal(true)}
               />,
               <EyeOutlined key="edit" />,
             ]}
           >
             <Meta title="Pilot Goose" description="500 coins" />
           </Card>
           <Modal onClose={() => setModal(false)} open={modal} />
         </div>
       </div>
     );
 }