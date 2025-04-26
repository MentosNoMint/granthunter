import { ArrowLeft, ArrowRight, RefreshCw, X } from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-7xl">
                {/* Profile avatar at the top */}
                <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">
                        M
                    </div>
                </div>

                {/* Main content */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Left panel - Project Creation */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h2 className="text-2xl font-bold">Создание проекта</h2>
                        <p className="text-gray-500 mb-6">Напишите вводные данные проекта</p>

                        {/* File upload area */}
                        <div className="border border-dashed border-gray-300 rounded-xl p-10 mb-6 flex flex-col items-center justify-center text-center">
                            <h3 className="text-lg font-semibold mb-2">Перенесите файлы проекта</h3>
                            <p className="text-gray-500 text-sm">
                                Загрузите хотя бы 2 документа — это повысит точность подбора грантов
                            </p>
                        </div>

                        {/* Uploaded file */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                stroke="#9333EA"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Custom_23413_2024-01</p>
                                    </div>
                                </div>
                                <button className="text-gray-400">
                                    <X size={16} />
                                </button>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-gray-800 h-2 rounded-full w-[90%]"></div>
                            </div>
                            <div className="text-right text-sm text-gray-500 mt-1">90%</div>
                        </div>

                        {/* Project description */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Описание проекта</h3>
                            <textarea
                                className="w-full border border-gray-300 rounded-xl p-4 min-h-[120px] text-gray-600 text-sm"
                                defaultValue="Этот проект создается для сохранения экологии в мире, наша команда из 4 человек, должна получить грант."
                            ></textarea>
                        </div>

                        {/* Generate with AI button */}
                        <button className="w-full bg-black text-white rounded-full py-3 font-medium">
                            Сгенерировать с помощью AI
                        </button>
                    </div>

                    {/* Right panel - AI Creation */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h2 className="text-2xl font-bold">Создание от AI</h2>
                        <p className="text-gray-500 mb-6">Текст, который предлагает Ai</p>

                        {/* Project name */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <label className="font-medium">Название проекта</label>
                                <button className="text-gray-400">
                                    <RefreshCw size={16} />
                                </button>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-3">
                                <p>Центр юга лучшее место</p>
                            </div>
                        </div>

                        {/* Project budget */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <label className="font-medium">Бюджет проекта</label>
                                <button className="text-gray-400">
                                    <RefreshCw size={16} />
                                </button>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-3">
                                <p>1.200.000 Рублей</p>
                            </div>
                        </div>

                        {/* Project description */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <label className="font-medium">Описание проекта</label>
                                <button className="text-gray-400">
                                    <RefreshCw size={16} />
                                </button>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-3 text-sm">
                                <p>
                                    Практический опыт показывает, что сложившаяся структура организации влечет за собой процесс внедрения
                                    и модернизации соответствующих условий активизации. Не следует, однако, забывать о том, что
                                    консультация с профессионалами из IT позволяет оценить значение соответствующих условий активизации!
                                    Таким образом, начало повседневной работы по формированию позиции обеспечивает широкому кругу
                                    специалистов участие в формировании форм воздействия?
                                </p>
                            </div>
                        </div>

                        {/* Project tags */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <label className="font-medium">Теги проекта</label>
                                <span className="text-gray-400 text-sm">12 тегов осталось</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                                    Экология
                                    <button className="text-gray-400">
                                        <X size={14} />
                                    </button>
                                </div>
                                <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                                    Научный
                                    <button className="text-gray-400">
                                        <X size={14} />
                                    </button>
                                </div>
                                <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                                    Бизнес
                                    <button className="text-gray-400">
                                        <X size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="border border-gray-300 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                                    + Малый бизнес
                                </button>
                                <button className="border border-gray-300 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                                    + Волонтерство
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom navigation */}
                <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <ArrowLeft size={20} />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">1</span>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-400">5</span>
                        </div>
                        <button className="px-4 py-2 bg-black text-white rounded-full">Проекты</button>
                        <button className="px-4 py-2 bg-white text-gray-500 rounded-full">Заявки</button>
                        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
