# Big web app App

# Структура шаблона
### base

Базовые вещи, необходимые в работе. Например, сейчас инициализация firebase и http (axios).

### components

Переиспользуемые UI компоненты, также здесь содержатся лэйауты.

### modules

Бизнес-логика, а именно взаимодействие с данными извне и их обработка (service, если firebase - ...firebaseService), а также хранение (store с использованием MobX). 

Разделение по папкам на основе зоны ответственности. 

Все используемые модели в файле ...types или даже лучше выделить их в папку models. Аналогично с DTO.

### routes

Регистрация экранов в роутинге, а также список экранов для навигации. Адреса также регистрируются в Routes для легкого импорта и переименовывания.

### screens

Экраны, нейминг папки отражает суть экрана. Внутри могут быть локально переиспользуемые компоненты (например карточки, выделяем в components) и модули для логичного разделения внутри одной страницы
