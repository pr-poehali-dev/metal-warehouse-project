import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    width: '',
    length: '',
    height: '',
    type: 'arched'
  });

  const calculatePrice = () => {
    const width = parseFloat(calculatorData.width) || 0;
    const length = parseFloat(calculatorData.length) || 0;
    const height = parseFloat(calculatorData.height) || 0;
    
    if (width === 0 || length === 0 || height === 0) return 0;
    
    const area = width * length;
    const basePrice = calculatorData.type === 'frameless' ? 3500 : 
                     calculatorData.type === 'straight' ? 4200 : 4000;
    
    return Math.round(area * basePrice);
  };

  const hangars = [
    {
      id: 1,
      title: 'Арочные ангары',
      type: 'arched',
      description: 'Классическое решение для склада, производства и логистики. Оптимальное соотношение цены и надёжности.',
      image: 'https://cdn.poehali.dev/projects/eb6526ec-5895-4240-a69b-9f8a593ad96c/files/4e772f84-df87-4d46-b03e-a8845f279aba.jpg',
      features: ['Ширина: 12-30 м', 'Длина: без ограничений', 'Высота: 4-12 м', 'Срок монтажа: от 14 дней'],
      specs: {
        width: '12-30 м',
        length: 'Без ограничений',
        height: '4-12 м',
        load: 'До 250 кг/м²',
        price: 'от 4 000 ₽/м²'
      }
    },
    {
      id: 2,
      title: 'Прямостенные ангары',
      type: 'straight',
      description: 'Максимальное использование внутреннего пространства. Идеально для промышленных предприятий и складов.',
      image: 'https://cdn.poehali.dev/projects/eb6526ec-5895-4240-a69b-9f8a593ad96c/files/c497c4e1-419e-466b-b070-5d1aea9c851d.jpg',
      features: ['Ширина: 10-40 м', 'Длина: без ограничений', 'Высота: 6-15 м', 'Срок монтажа: от 20 дней'],
      specs: {
        width: '10-40 м',
        length: 'Без ограничений',
        height: '6-15 м',
        load: 'До 300 кг/м²',
        price: 'от 4 200 ₽/м²'
      }
    },
    {
      id: 3,
      title: 'Бескаркасные ангары',
      type: 'frameless',
      description: 'Быстровозводимая конструкция из металла. Экономичное решение для временных и постоянных сооружений.',
      image: 'https://cdn.poehali.dev/projects/eb6526ec-5895-4240-a69b-9f8a593ad96c/files/2b2d226b-7635-43fa-bdc3-1de916d529c1.jpg',
      features: ['Ширина: 6-20 м', 'Длина: без ограничений', 'Высота: 3-8 м', 'Срок монтажа: от 7 дней'],
      specs: {
        width: '6-20 м',
        length: 'Без ограничений',
        height: '3-8 м',
        load: 'До 200 кг/м²',
        price: 'от 3 500 ₽/м²'
      }
    }
  ];

  const portfolio = [
    { title: 'Складской комплекс 2400 м²', location: 'Московская обл.', type: 'Прямостенный' },
    { title: 'Производственный цех 1800 м²', location: 'Тульская обл.', type: 'Арочный' },
    { title: 'Логистический центр 3200 м²', location: 'Калужская обл.', type: 'Прямостенный' },
    { title: 'Сельхоз ангар 1200 м²', location: 'Воронежская обл.', type: 'Бескаркасный' },
  ];

  const advantages = [
    { icon: 'Zap', title: 'Быстрый монтаж', desc: 'От 7 до 20 дней в зависимости от типа' },
    { icon: 'Shield', title: 'Гарантия 15 лет', desc: 'На конструкцию и металлопокрытие' },
    { icon: 'DollarSign', title: 'Выгодная цена', desc: 'От производителя без посредников' },
    { icon: 'Wrench', title: 'Под ключ', desc: 'Проектирование, производство, монтаж' },
    { icon: 'Ruler', title: 'Любые размеры', desc: 'Индивидуальное проектирование' },
    { icon: 'ThermometerSnowflake', title: 'Всесезонность', desc: 'Работаем круглый год' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Factory" size={32} className="text-accent" />
            <span className="text-2xl font-bold">АНГАРИУМ</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
            <a href="#advantages" className="text-sm font-medium hover:text-accent transition-colors">Преимущества</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Портфолио</a>
            <a href="#calculator" className="text-sm font-medium hover:text-accent transition-colors">Калькулятор</a>
            <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Производитель № 1 в России</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Быстровозводимые ангары от производителя
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Бескаркасные, прямостенные и арочные конструкции. Проектирование, производство и монтаж под ключ. Гарантия 15 лет.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={adv.icon} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{adv.title}</CardTitle>
                  <CardDescription className="text-base">{adv.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог ангаров</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы производим три типа быстровозводимых ангаров. Каждый тип имеет свои особенности и оптимален для конкретных задач.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hangars.map((hangar) => (
              <Card key={hangar.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hangar.image} 
                    alt={hangar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">{hangar.specs.price}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{hangar.title}</CardTitle>
                  <CardDescription className="text-base">{hangar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {hangar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm border-t pt-4">
                    <div>
                      <span className="text-muted-foreground">Ширина:</span>
                      <p className="font-medium">{hangar.specs.width}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Высота:</span>
                      <p className="font-medium">{hangar.specs.height}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Длина:</span>
                      <p className="font-medium">{hangar.specs.length}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Нагрузка:</span>
                      <p className="font-medium">{hangar.specs.load}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
                    Получить расчёт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Реализованные проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.type}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    {project.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground">
              Рассчитайте примерную стоимость вашего ангара за 30 секунд
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Параметры ангара</CardTitle>
              <CardDescription>Укажите желаемые размеры и выберите тип конструкции</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="arched" onValueChange={(v) => setCalculatorData({...calculatorData, type: v})}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="arched">Арочный</TabsTrigger>
                  <TabsTrigger value="straight">Прямостенный</TabsTrigger>
                  <TabsTrigger value="frameless">Бескаркасный</TabsTrigger>
                </TabsList>
                
                <TabsContent value="arched" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="width">Ширина (м)</Label>
                      <Input 
                        id="width" 
                        type="number" 
                        placeholder="12-30"
                        value={calculatorData.width}
                        onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="length">Длина (м)</Label>
                      <Input 
                        id="length" 
                        type="number" 
                        placeholder="Любая"
                        value={calculatorData.length}
                        onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Высота (м)</Label>
                      <Input 
                        id="height" 
                        type="number" 
                        placeholder="4-12"
                        value={calculatorData.height}
                        onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="straight" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="width2">Ширина (м)</Label>
                      <Input 
                        id="width2" 
                        type="number" 
                        placeholder="10-40"
                        value={calculatorData.width}
                        onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="length2">Длина (м)</Label>
                      <Input 
                        id="length2" 
                        type="number" 
                        placeholder="Любая"
                        value={calculatorData.length}
                        onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height2">Высота (м)</Label>
                      <Input 
                        id="height2" 
                        type="number" 
                        placeholder="6-15"
                        value={calculatorData.height}
                        onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="frameless" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="width3">Ширина (м)</Label>
                      <Input 
                        id="width3" 
                        type="number" 
                        placeholder="6-20"
                        value={calculatorData.width}
                        onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="length3">Длина (м)</Label>
                      <Input 
                        id="length3" 
                        type="number" 
                        placeholder="Любая"
                        value={calculatorData.length}
                        onChange={(e) => setCalculatorData({...calculatorData, length: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height3">Высота (м)</Label>
                      <Input 
                        id="height3" 
                        type="number" 
                        placeholder="3-8"
                        value={calculatorData.height}
                        onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg border-2 border-accent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Примерная стоимость:</p>
                    <p className="text-4xl font-bold text-accent">
                      {calculatePrice().toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <Icon name="Calculator" size={48} className="text-accent/30" />
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Окончательная стоимость определяется после разработки проекта
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Оставить заявку</h2>
            <p className="text-lg text-white/90">
              Свяжемся с вами в течение 15 минут и ответим на все вопросы
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="mail@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш проект: назначение ангара, желаемые размеры, сроки..." 
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={32} className="text-accent" />
                <span className="text-xl font-bold">АНГАРИУМ</span>
              </div>
              <p className="text-white/70 text-sm">
                Производство и монтаж быстровозводимых ангаров с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Арочные ангары</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Прямостенные ангары</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Бескаркасные ангары</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@angarium.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Заводская, 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2024 АНГАРИУМ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
