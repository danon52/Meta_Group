

export default function Header() {
    return (
        <div>
            <header className="h-20   fixed left-0 w-full z-50  px-10">
                <div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img className="w-8 mt-1" src="<img class="
                                src="https://static.tildacdn.com/tild3833-6131-4738-a430-373834626263/Group_39903.svg" alt=""
                                imgfield="tn_img_1748261949057" alt="" />
                            <div className="">
                                <p className="text-3xl mt-4 ml-5">MetaGroupe ®</p>
                            </div>
                        </div>
                        {/* <div>
                            <p className="text-2xl mt-5 text-[#8C6E2E]">Ваш бизнес в ваших руках </p>
                        </div> */}
                        <div className="">
                            <button className="rounded-4xl mt-2 text-xl w-50 h-15 border hover:bg-[#3D3D3D] hover:scale-105
                                duration-300 cursor-pointer
                            ">Оставить заявку</button>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}
