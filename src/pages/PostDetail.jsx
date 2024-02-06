import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog102.jpg";

const PostDetail = () => {
  return (
    <section className="postDetail">
      <div className="container postDetailContainer">
        <div className="postDetailHeader">
          <PostAuthor />
          <div className="postDetailButtons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="postDetailThumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          placeat commodi ullam recusandae officiis error nihil non veniam
          autem, animi aut assumenda delectus nesciunt dolorum, repudiandae quis
          aspernatur, dolorem molestiae beatae quisquam expedita vel quos! Autem
          est illum natus molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis
          suscipit mollitia voluptas quisquam voluptates, sed rerum distinctio
          ex modi molestiae ipsa laudantium? Ab modi optio exercitationem
          quaerat omnis est provident laboriosam inventore similique! Alias
          mollitia ducimus, maiores, quaerat quod deserunt fugit, accusamus
          quasi temporibus est odio nemo. Quo soluta adipisci repellat
          necessitatibus reprehenderit, accusamus assumenda voluptatibus neque
          reiciendis? Vel, alias suscipit nostrum soluta magni veniam culpa ea
          quisquam corrupti dolorum consequatur numquam facere nihil quas
          similique assumenda eos eius possimus, quasi, tempore accusantium
          cumque rem? Fuga, provident cumque ipsum officia minus libero,
          deleniti officiis dolorem esse saepe illum. Debitis illum ab nisi,
          asperiores consequatur officiis tenetur eos omnis dolore ducimus
          placeat suscipit odit veritatis, hic, magni commodi maiores ipsam!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          aliquam, ullam similique architecto nihil dolore labore delectus
          voluptate nisi quis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          neque praesentium! Voluptate, architecto sint fugiat dolore sed id
          soluta praesentium. Aut tempora corrupti, nam tempore recusandae ex
          similique ipsam possimus nihil asperiores temporibus rerum omnis
          placeat animi sint? Sequi distinctio accusamus exercitationem quod
          aliquid eligendi ad debitis veniam harum expedita reprehenderit beatae
          molestias, dolorem sapiente provident voluptates corporis facere,
          voluptatum tempore fuga ab. Ex, temporibus. Esse voluptatibus
          architecto rem porro inventore eos dignissimos! Laborum expedita nemo
          deleniti quae, saepe repellendus cumque aliquam soluta sequi ab id
          voluptatum, eum corporis facilis eos, cupiditate optio nihil. Vero,
          magni. Iure quam, dolore dolorum porro rerum dignissimos enim.
          Excepturi dolorum et qui autem sequi iste reiciendis perferendis
          suscipit rem nisi iusto quidem mollitia nesciunt laudantium aliquid
          quos optio doloribus, unde labore at? Odit, error necessitatibus
          incidunt voluptatibus laboriosam, voluptatem, animi nisi porro beatae
          saepe ea accusamus possimus aliquam eaque quis eius perferendis sequi!
          Ad fugit fuga quae voluptates? Eveniet, vel nesciunt non alias
          molestias, ab tempora, atque id numquam corrupti beatae quae cum
          officia et odio sit hic. Non doloribus culpa rerum exercitationem
          labore optio omnis minus architecto. Libero animi consectetur maiores
          voluptatem architecto deserunt, enim repudiandae omnis voluptatum
          dolor blanditiis, iure reiciendis temporibus?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
