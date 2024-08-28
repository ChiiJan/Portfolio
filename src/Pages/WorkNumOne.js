import '../css/webdevelopment.css';
import { useNavigate } from "react-router-dom";
import { PosterCard } from "../Component/PosterCard.js";
import { ImpactCard } from "../Component/ImpactCard.js";
import MaterialIcon from 'react-google-material-icons';
import Navbar from '../Component/Navbar.js';


function WorkOne() {
    const navigate = useNavigate();

    return (
        <div className="Poster">
            <Navbar />

            <body className="Poster-body">
                <h1>Native Species in Singapore</h1>
                <div className='Card-layout'>
                    <div>
                        <PosterCard
                            imgsrc={require('../assets/plant1.png')}
                            imgalt={"Taken on 6 Sep 2022"}
                            title={"TEMBUSU"}
                            subtitle={"(Fagraea fragrans)"}
                            modaltext={"The Tembusu is one of Singapore’s most distinctive trees. This native of Singapore is a large, evergreen tree that grows up to 40m in height."}
                            modaltext2={"This tree can be recognised by its deeply fissured dark brown bark and unique perpendicular branching. It is highly robust and can grow even in poorly drained, clayey soils."}
                            modaltext3={"During the flowering season in May - June and October - November, its creamy white flowers open at sunset and give off a strong fragrance in the evening. This gives rise to its scientific name, Fagraea fragrans – ‘fragrans’ means sweet-smelling, or fragrant."}
                        />
                    </div>
                    <div>
                        <PosterCard
                            imgsrc={require('../assets/plant2.png')}
                            imgalt={"Taken on 6 Sep 2022"}
                            title={"SIMPBOH AIR "}
                            subtitle={"(Dillenia suffruticosa)"}
                            modaltext={"This plant is a large shrub or small tree, growing about 6 to 7 meters tall. It has deep roots that can reach underground water, so if you see this plant, it might mean there's water below the surface."}
                            modaltext2={"The leaves are big (15-35 cm), oval-shaped, and look a bit like cabbage leaves with toothed edges and a fold near the stalk. Young leaves are reddish and have a noticeable, bumpy texture because of the veins."}
                            modaltext3={"The big leaves of the Simpoh Air plant were often used to wrap food like tempeh (fermented soybean cakes) or folded into small cones to hold traditional snacks like rojak."}
                        />
                    </div>
                    <div>
                        <PosterCard
                            imgsrc={require('../assets/plant3.png')}
                            imgalt={"Taken on 6 Sep 2022"}
                            title={"SENDUDUK"}
                            subtitle={"(Melastoma malabathricum)"}
                            modaltext={"This shrub grows 1-2 meters tall, but if left untrimmed, it can become a small tree. The leaves are narrow and pointed at both ends. The stems are reddish and have bristly scales."}
                            modaltext2={"The flowers are large (5-7 cm), purplish-pink, and quite eye-catching. According to Corners, the flower opens for just one day, starting around 8 a.m. and closing by late afternoon. Sometimes, shrubs with white flowers appear, and the Malays believe these have magical properties."}
                            modaltext3={"The fruit looks like a berry and breaks open in a random way. The seeds, which are sweet and slightly astringent, can stain your mouth when eaten. They are enjoyed by children, as well as birds, squirrels, and monkeys."}
                        />
                    </div>
                </div>

                <div className='ImpactCard'>
                    <ImpactCard
                        displayIcon={<MaterialIcon icon="compost" size={36} />}
                        displayText={"Waste impact on Plants"}
                        impact1={"Protective equipment wastes add the microplastic load to the soil, which are too small to be seen and can alter soil physicochemical properties, decrease soil fertility and nutrients, and soil microorganism function by having a metabolic effect on plants. These microplastics persists for more than 100 years due to low light and oxygen conditions."}
                        impact2={"Plant may absorb nutrients from soil pollution and/or mircoplastic load through their roots and become harmful to human or animals that consume it."}
                        impacticon1={<MaterialIcon icon="masks" size={36} />}
                        impacticon2={<MaterialIcon icon="grass" size={36} />}
                    />
                </div>

                <div className='Card-layout'>
                    <div>
                        <PosterCard
                            imgsrc={require('../assets/animal1.png')}
                            imgalt={"Taken on 22 Oct 2022"}
                            title={"GOLDEN ORB SPIDER "}
                            subtitle={"(Nephila pilipes)"}
                            modaltext={"Golden Orb Spider (Nephila pilipes) is the second most commonly found species of arachnids, or spiders, in Singapore. It is most usually found in green spaces like gardens and forests."}
                            modaltext2={"Female golden orb spiders can grow up to 20cm in length, unlike their male counterparts that are four to 10 times smaller."}
                            modaltext3={"Golden orb spiders get their name from the yellow hued webs that can span up to 1.5m in diameter. The silk used to built the web is so strong that it has been compared to Kevlar, a synthetic material strong enough to stop bullets and knives."}
                        />
                    </div>
                    <div>
                        <PosterCard
                            imgsrc={require('../assets/animal2.png')}
                            imgalt={"Taken on 22 Oct 2022"}
                            title={" PLAINTAIN SQUIRREL "}
                            subtitle={"(Callosciurus notatus)"}
                            modaltext={"This lively and sometimes noisy squirrel is often spotted in trees near our shores. It’s commonly found in forests, parks, and even urban areas. Active during the day, it usually stays in the trees and rarely comes down to the ground."}
                            modaltext2={"The squirrel's body and head are up to 22 cm long, with a tail that can reach 21 cm. It has an olive-brown body and tail, a reddish-brown belly, black and white stripes along its sides, and a whitish area around its eyes."}
                            modaltext3={"It eats fruits, seeds, leaves, bark and insects, searching for foods in the trees."}
                        />
                    </div>
                    <div>
                        <PosterCard
                            imgsrc={require('../assets/animal3.png')}
                            imgalt={"Taken on 22 Oct 2022"}
                            title={"SHIELD BUG"}
                            subtitle={"(Pycanum rubens)"}
                            modaltext2={"These bright-colored bugs are sometimes found on Simpoh Air (Dillenia suffruticosa), which they likely feed on."}
                            modaltext={"Shield bugs are a type of True Bug from the Hemiptera order. They feed on plants by sucking out their sap. Some can be pests in farming, some can release defensive chemicals, and a few even take care of their eggs."}
                            modaltext3={"The adult bugs are about 3 cm long, green with orange and black bands on the lower body edge. The young bugs (nymphs) are smaller, more rectangular, and can be green or red."}
                        />
                    </div>
                </div>

                <div className='ImpactCard'>
                    <ImpactCard
                        displayIcon={<MaterialIcon icon="cruelty_free" size={36} />}
                        displayText={"Waste impact on Animals"}
                        impact1={"Terrestrial animals and insects may mistake these wastes as food. This will harm their digestive system due to being poisoned by litter with chemical composition, leading to serious health concerns such as hormonal changes that can cause reproductive abnormalities and an overactive immune system. "}
                        impact2={"These waste may be mistaken as a shelter and/or when they are searching for food, which will trap and injure the animals.  "}
                        impacticon1={<MaterialIcon icon="bug_report" size={36} />}
                        impacticon2={<MaterialIcon icon="warning" size={36} />}
                    />
                </div>

            </body>
            <footer className="Poster-footer">
            </footer>
        </div>
    );
}

export default WorkOne;