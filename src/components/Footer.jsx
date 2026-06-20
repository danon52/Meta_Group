
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div>
            <footer>
                <div>
                    <div className='flex justify-between'>
                        <div className=''>
                            <div>
                                <p className='text-white'>Ростов-на-Дону, ул. Города Волос ,14 - Коворкинг "ЛУЧ" офис 13  </p>
                            </div>
                            <div className='py-3'>
                                <p className='text-white'>График работы: пн-пт с 10-18 </p>
                            </div>
                            <div>
                                <Link to={'https://metagroup.art/privacy'}>
                                    <p className='text-white'>Политика конфидециальности</p>
                                </Link>
                                <div className='py-4'>
                                    <Link href={'https://metagroup.art/privacy#oferta'}>
                                        < p className='text-white'> Публичная оферта </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-end'>
                                <p className='text-white'>meta.group.art@yandex.ru</p>
                            </div>
                            <div className='py-4'>
                                <p className='text-white'>©METAGROUP., 2016 - 2025 г. Все права защищены</p>
                            </div>
                        </div>

                    </div>
                    <div>


                    </div>
                    <div className='flex justify-center w-full '>
                        {/* foter for pc version  */}
                        <p className='px-20 h-60 w-full text-gray-600 text-[260px] mr-70'>METAGROUPE</p>
                    </div>
                    <div className='ml-[-40px]'>
                        <div className=' absolute w-40 bg-yellow-400 h-13 rounded-2xl mt-20  flex justify-start '>
                            <div className='flex justify-start '>
                                <img className='w-70 py-2  ' src="no.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div >
            </footer >
        </div >
    )
}
