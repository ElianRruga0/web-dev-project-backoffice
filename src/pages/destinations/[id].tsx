import GoBack from "@/components/GoBack";
import { NextPage } from "next";
import React from "react";
import { IoPencilSharp } from "react-icons/io5";

const Destination: NextPage = () => {
  return (
    <div className="container mx-auto py-14">
      <GoBack />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="bg-white p-2 rounded">
            <IoPencilSharp className="text-2xl " />
          </button>
          <input
            className="text-4xl font-bold italic outline-none bg-transparent"
            value="Durres"
            disabled
          />
        </div>

        <button className="bg-red-800 px-4 py-2 text-white text-center rounded-lg uppercase font-bold text-xl">
          Delete
        </button>
      </div>

      <div className="w-full h-96 bg-red-500 rounded-lg relative overflow-hidden my-8">
        <button className="absolute z-20 right-3 top-3 p-2 rounded bg-white">
          <IoPencilSharp className="text-lg " />
        </button>
      </div>

      <button className="bg-white p-2 rounded">
        <IoPencilSharp className="text-2xl " />
      </button>

      <textarea
        className="w-full h-80 p-2  outline-none bg-transparent "
        value="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere
      dolores veniam dolor doloremque, delectus nihil illo magnam laboriosam
      earum. Architecto quos iste exercitationem dolores accusamus veritatis,
      beatae sit quod, fugit ducimus laudantium possimus dicta corrupti
      eligendi totam non distinctio. Ullam officia accusantium voluptatem,
      aliquam id, commodi suscipit, reiciendis quasi unde et ea. Molestiae,
      iste laudantium quos tempora porro doloremque accusantium consequuntur
      impedit earum saepe velit cum blanditiis pariatur quaerat. Deserunt qui
      repellat aut, eligendi aliquam aspernatur voluptatum fugit quos
      laboriosam cumque ipsa nulla iste illum repudiandae officiis consequatur
      eos iusto consectetur. Quasi voluptatibus minima, consequatur, facilis
      sint eaque exercitationem, deleniti recusandae quo illum totam
      molestias? Iure optio repellat atque quidem autem non beatae et maiores
      veritatis rerum, quasi iusto laudantium accusantium recusandae
      cupiditate temporibus laborum quibusdam similique nesciunt. Temporibus
      inventore et at ipsam quod commodi autem similique, nam rem dolorum
      maiores atque cum enim veritatis alias accusantium tempora sint saepe!
      Dolorum vero commodi, sed velit iure rem ex beatae quae doloribus
      impedit nobis sunt officia necessitatibus a natus id, magni
      reprehenderit quia, eveniet asperiores illum. Dolorem consequuntur
      doloribus, est possimus nulla earum blanditiis, sapiente quo,
      repellendus molestias impedit tempora quod voluptatibus odio modi
      provident laboriosam natus velit atque et accusamus maiores. Delectus
      distinctio necessitatibus animi sunt vel labore, possimus consequatur
      vitae atque nemo magni voluptate autem quaerat ex beatae consequuntur
      ullam laudantium corporis. Consequuntur quisquam officia, voluptates,
      sed eius accusamus aliquam voluptate iste, autem voluptas rem expedita!
      Tenetur, error minima. Atque et molestiae temporibus ipsa, facere, quos,
      esse beatae ducimus numquam odit similique consequuntur!
      "
      />

      <button className="w-full py-3 bg-black rounded-lg text-white text-center uppercase text-xl tracking-widest">
        Save changes
      </button>
    </div>
  );
};

export default Destination;
