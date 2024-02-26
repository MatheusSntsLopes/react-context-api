import './styles.css';
import {Title} from './Title';
import { Body } from './Body';
import { Img } from './Img';
export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <Img cover={cover} title={title} />
    <div className="post-content">
     <Title title={title} id={id}/>
     <Body body={body}/>
    </div>
  </div>
);