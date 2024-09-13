import Picture from "@/components/picture"; 


export const revalidate = 0;

const Landing = () => {
  return (
    <div>
      <div id="mission" className="my-6 p-6  flex items-center h-96 w-full gap-4">
        <Picture src="/images/selfie.jpg" className="w-1/3 h-full rounded border border-black border-4" />
        <Picture src="/images/frame.jpg" className="w-1/3 h-full rounded border border-black border-4" />
        <div className="w-2/3 ml-3">
          <h1 className="text-center text-2xl font-bold">
            Our Mission
          </h1>
          <div className="ml-6 mr-6 ml-auto mr-auto">
            At Sweet Janes Honey, our mission is to cultivate a harmonious 
            relationship between nature and community by raising 
            bees and producing high-quality honey. All proceeds from 
            our honey sales are dedicated to supporting “The Bee Community,” 
            a vital organization that empowers special needs individuals 
            in College Station, Texas. Through our sustainable beekeeping 
            practices, we strive to protect these essential pollinators, 
            ensuring a thriving environment for future generations. By 
            contributing to “The Bee Community,” we aim to provide educational 
            and social opportunities for special needs individuals, fostering a 
            sense of belonging and enhancing their quality of life. Together, we
            are building a sweeter, more inclusive world, one jar of honey at a
            time.
          </div>
        </div>
      </div> 

      <div id="farm" className="my-8 p-6 flex items-center h-96 w-full gap-4">
      <div className="w-2/3 ml-3">
          <h1 className="text-center text-2xl font-bold">
            The Farm
          </h1>
          <div className="ml-6 mr-6 ml-auto mr-auto">
            At Sweet Janes Honey, our mission is to cultivate a harmonious 
            relationship between nature and community by raising 
            bees and producing high-quality honey. All proceeds from 
            our honey sales are dedicated to supporting “The Bee Community,” 
            a vital organization that empowers special needs individuals 
            in College Station, Texas. Through our sustainable beekeeping 
            practices, we strive to protect these essential pollinators, 
            ensuring a thriving environment for future generations. By 
            contributing to “The Bee Community,” we aim to provide educational 
            and social opportunities for special needs individuals, fostering a 
            sense of belonging and enhancing their quality of life. Together, we
            are building a sweeter, more inclusive world, one jar of honey at a
            time.
          </div>
        </div>
        <Picture src="/images/family.jpg" className="w-1/3 h-full rounded border border-black border-4" />
      </div> 

      <div id="keepers" className="my-8 p-6  flex items-center h-96 w-full gap-4">
        <Picture src="/images/selfie.jpg" className="w-1/3 h-full rounded border border-black border-4" />
        <Picture src="/images/frame.jpg" className="w-1/3 h-full rounded border border-black border-4" />
        <div className="w-2/3 ml-3">
          <h1 className="text-center text-2xl font-bold">
            The Beekeepers
          </h1>
          <div className="ml-6 mr-6 ml-auto mr-auto">
            At Sweet Janes Honey, our mission is to cultivate a harmonious 
            relationship between nature and community by raising 
            bees and producing high-quality honey. All proceeds from 
            our honey sales are dedicated to supporting “The Bee Community,” 
            a vital organization that empowers special needs individuals 
            in College Station, Texas. Through our sustainable beekeeping 
            practices, we strive to protect these essential pollinators, 
            ensuring a thriving environment for future generations. By 
            contributing to “The Bee Community,” we aim to provide educational 
            and social opportunities for special needs individuals, fostering a 
            sense of belonging and enhancing their quality of life. Together, we
            are building a sweeter, more inclusive world, one jar of honey at a
            time.
          </div>
        </div>
      </div> 

    </div>
  );
}

export default Landing;