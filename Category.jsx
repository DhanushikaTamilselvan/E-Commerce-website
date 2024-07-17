import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOV-qivAkno5zd_fduV5WCtBBEQ8xoLB6qb39rdedtt6tiluK8CpOvtyRRyLq4rF5FqIc&usqp=CAU',
        name: 'Fab brochure'
    },
    {
        image: 'https://c1.wallpaperflare.com/preview/844/635/608/buttons-colorful-sewing-texture.jpg',
        name: 'Buttons'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjNGyfzL6PU5aO53olJknQD11pmZ49oreRQTaOS4tZfsQXCXJzGIOeThhggymLvCZ3x4&usqp=CAU',
        name: 'Threads'
    },
    {
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/408486114/DT/TE/VW/111491196/electroplated-bra-hooks-in-silver-gold-rose-gold-250x250.jpg',
        name: 'Hooks'
    },
    {
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/XB/XV/XZ/11248136/pom-pom-balls-250x250.jpeg',
        name: 'Acrylic pom poms'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61XncCJvs5L._AC_UL480_FMwebp_QL65_.jpg',
        name: 'Storage box'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61Fq4au2AnL._AC_UL480_FMwebp_QL65_.jpg',
        name: 'Pearl beats'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61WTRu5QUfL._AC_UL480_FMwebp_QL65_.jpg',
        name: 'Button pins'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81OeklF-P4L._AC_UL480_FMwebp_QL65_.jpg',
        name:'clothing tag hang'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-8">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-green-10 transition-all cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;