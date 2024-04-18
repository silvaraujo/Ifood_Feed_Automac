const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1417,
            height: 1170
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://portal.ifood.com.br/home');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(3) > a:nth-of-type(2) div.TextCollapse-sc-wn2msi-4 > span'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"sidebar-item-feed.TITLE.primary\\"]/div[2]/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) > a:nth-of-type(2) div.TextCollapse-sc-wn2msi-4 > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 16.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Criar publicação) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator("[data-testid='micro-frontend-feed'] > div.Flex-sc-rrnf8w-0 button > div"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[1]/div[2]/button/div)'),
            targetPage.locator(":scope >>> [data-testid='micro-frontend-feed'] > div.Flex-sc-rrnf8w-0 button > div"),
            targetPage.locator('::-p-text(Criar publicação)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.770751953125,
                y: 21.5625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Fotos do cardápio[role=\\"button\\"]) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#rc-tabs-1-tab-2 div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rc-tabs-1-tab-2\\"]/button/div)'),
            targetPage.locator(':scope >>> #rc-tabs-1-tab-2 div'),
            targetPage.locator('::-p-text(Fotos do cardápio)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79.89581298828125,
                y: 7.666656494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#rc-tabs-1-panel-2 > div > div > div:nth-of-type(1) img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rc-tabs-1-panel-2\\"]/div/div/div[1]/div/div/img)'),
            targetPage.locator(':scope >>> #rc-tabs-1-panel-2 > div > div > div:nth-of-type(1) img')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24.354156494140625,
                y: 33.322906494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(2) div.Flex-sc-rrnf8w-0 > div > span'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[2]/div[2]/div[3]/div/span)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(2) div.Flex-sc-rrnf8w-0 > div > span'),
            targetPage.locator('::-p-text(Sugestões)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52.33332824707031,
                y: 4.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.react-tiny-popover-container li:nth-of-type(1) > div'),
            targetPage.locator('::-p-xpath(/html/body/div[24]/div[2]/ul/li[1]/div)'),
            targetPage.locator(':scope >>> div.react-tiny-popover-container li:nth-of-type(1) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 83,
                y: 22.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Buscar por categorias)'),
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(3) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(3) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 24.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Buscar por categorias)'),
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input')
        ])
            .setTimeout(timeout)
            .fill('b');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) > label'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/div/ul/li[2]/label)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) > label'),
            targetPage.locator('::-p-text(Bolo)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 140,
                y: 14.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 76.6875,
                y: 22.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input')
        ])
            .setTimeout(timeout)
            .fill('doce');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li > label'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/div/ul/li/label)'),
            targetPage.locator(':scope >>> li > label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 151,
                y: 27.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 615.3333282470703,
                y: 744.3333435058594,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Selecionar item)'),
            targetPage.locator('div > div:nth-of-type(4) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[4]/div[2]/input)'),
            targetPage.locator(':scope >>> div > div:nth-of-type(4) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 167,
                y: 24.666656494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(1) span.sc-eFWqGp'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[4]/div[2]/div/div/ul[1]/li[1]/button/div[2]/span[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(1) span.sc-eFWqGp'),
            targetPage.locator('::-p-text(Mesclado)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 143.3333282470703,
                y: 14.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.333328247070312,
                y: 16.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(DD/MM/AAAA)'),
            targetPage.locator('div.gdYClK input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div[2]/div[1]/div/div/div/div[1]/input)'),
            targetPage.locator(':scope >>> div.gdYClK input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 79,
                y: 22,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Thu Apr 18 2024) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.DayPicker-Day--today > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div[2]/div[1]/div/div/div[2]/div/div/div/div[2]/div/div[3]/div[3]/div[5]/div)'),
            targetPage.locator(':scope >>> div.DayPicker-Day--today > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.39581298828125,
                y: 19.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Escolha o horário)'),
            targetPage.locator('#downshift-0-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-0-input\\"])'),
            targetPage.locator(':scope >>> #downshift-0-input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.666656494140625,
                y: 15,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Escolha o horário[role=\\"textbox\\"])'),
            targetPage.locator('#downshift-0-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-0-input\\"])'),
            targetPage.locator(':scope >>> #downshift-0-input')
        ])
            .setTimeout(timeout)
            .fill('19:');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up(';');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Escolha o horário[role=\\"textbox\\"])'),
            targetPage.locator('#downshift-0-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-0-input\\"])'),
            targetPage.locator(':scope >>> #downshift-0-input')
        ])
            .setTimeout(timeout)
            .fill('19:00');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 509.3333282470703,
                y: 1210.3333435058594,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-ctuRtO button svg'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/button/div/svg)'),
            targetPage.locator(':scope >>> div.sc-ctuRtO button svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 9.333251953125,
                y: 20.333328247070312,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Criar publicação) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator("[data-testid='micro-frontend-feed'] > div.Flex-sc-rrnf8w-0 button > div"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[1]/div[2]/button/div)'),
            targetPage.locator(":scope >>> [data-testid='micro-frontend-feed'] > div.Flex-sc-rrnf8w-0 button > div"),
            targetPage.locator('::-p-text(Criar publicação)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40.770751953125,
                y: 20.5625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Fotos do cardápio[role=\\"button\\"]) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#rc-tabs-2-tab-2 div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rc-tabs-2-tab-2\\"]/button/div)'),
            targetPage.locator(':scope >>> #rc-tabs-2-tab-2 div'),
            targetPage.locator('::-p-text(Fotos do cardápio)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 62.89581298828125,
                y: 10.666656494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#rc-tabs-2-panel-2 > div > div > div:nth-of-type(2) img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rc-tabs-2-panel-2\\"]/div/div/div[2]/div/div/img)'),
            targetPage.locator(':scope >>> #rc-tabs-2-panel-2 > div > div > div:nth-of-type(2) img')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.75,
                y: 30.322906494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(2) div.Flex-sc-rrnf8w-0 > div > span'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[2]/div[2]/div[3]/div/span)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(2) div.Flex-sc-rrnf8w-0 > div > span'),
            targetPage.locator('::-p-text(Sugestões)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31.333328247070312,
                y: 12.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.react-tiny-popover-container li:nth-of-type(2) > div'),
            targetPage.locator('::-p-xpath(/html/body/div[24]/div[2]/ul/li[2]/div)'),
            targetPage.locator(':scope >>> div.react-tiny-popover-container li:nth-of-type(2) > div'),
            targetPage.locator('::-p-text(Tá de olho? Experimenta)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 160,
                y: 21.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Buscar por categorias)'),
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(3) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(3) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 130,
                y: 40.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Buscar por categorias)'),
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input')
        ])
            .setTimeout(timeout)
            .fill('bolo');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li > label'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/div/ul/li/label)'),
            targetPage.locator(':scope >>> li > label'),
            targetPage.locator('::-p-text(Bolo)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 151,
                y: 17.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-text(bolo)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88.6875,
                y: 24.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-text(bolo)')
        ])
            .setTimeout(timeout)
            .fill('doc');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li > label'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/div/ul/li/label)'),
            targetPage.locator(':scope >>> li > label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 162,
                y: 6.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.main__body div:nth-of-type(3) > div.Flex-sc-rrnf8w-0 > span'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[1]/span)'),
            targetPage.locator(':scope >>> div.main__body div:nth-of-type(3) > div.Flex-sc-rrnf8w-0 > span'),
            targetPage.locator('::-p-text(Selecione até)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 274.3333282470703,
                y: 19.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Selecionar item)'),
            targetPage.locator('div > div:nth-of-type(4) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[4]/div[2]/input)'),
            targetPage.locator(':scope >>> div > div:nth-of-type(4) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 27.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Bolo de Trigo com Goiabada)'),
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(3) > button'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[4]/div[2]/div/div/ul[1]/li[3]/button)'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(3) > button'),
            targetPage.locator('::-p-text(Bolo de Trigo com GoiabadaR$ 4,90)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 158.66665649414062,
                y: 42.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 39.33332824707031,
                y: 16.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(DD/MM/AAAA)'),
            targetPage.locator('div.gdYClK input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div[2]/div[1]/div/div/div/div[1]/input)'),
            targetPage.locator(':scope >>> div.gdYClK input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 96,
                y: 21,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Thu Apr 18 2024) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.DayPicker-Day--today > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div[2]/div[1]/div/div/div[2]/div/div/div/div[2]/div/div[3]/div[3]/div[5]/div)'),
            targetPage.locator(':scope >>> div.DayPicker-Day--today > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.39581298828125,
                y: 12.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Escolha o horário)'),
            targetPage.locator('#downshift-39-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-39-input\\"])'),
            targetPage.locator(':scope >>> #downshift-39-input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69.66665649414062,
                y: 25,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Escolha o horário[role=\\"textbox\\"])'),
            targetPage.locator('#downshift-39-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-39-input\\"])'),
            targetPage.locator(':scope >>> #downshift-39-input')
        ])
            .setTimeout(timeout)
            .fill('19:30');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 563.3333282470703,
                y: 1189.3333435058594,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enviar) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.sc-eXBvqI > button > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[2]/div[2]/button/div)'),
            targetPage.locator(':scope >>> div.sc-eXBvqI > button > div'),
            targetPage.locator('::-p-text(Enviar)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.145751953125,
                y: 10.45831298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-ctuRtO button svg'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/button/div/svg)'),
            targetPage.locator(':scope >>> div.sc-ctuRtO button svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.333251953125,
                y: 16.333328247070312,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Criar publicação) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator("[data-testid='micro-frontend-feed'] > div.Flex-sc-rrnf8w-0 button > div"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[1]/div[2]/button/div)'),
            targetPage.locator(":scope >>> [data-testid='micro-frontend-feed'] > div.Flex-sc-rrnf8w-0 button > div"),
            targetPage.locator('::-p-text(Criar publicação)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53.770751953125,
                y: 20.5625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Fotos do cardápio[role=\\"button\\"]) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('#rc-tabs-3-tab-2 div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rc-tabs-3-tab-2\\"]/button/div)'),
            targetPage.locator(':scope >>> #rc-tabs-3-tab-2 div'),
            targetPage.locator('::-p-text(Fotos do cardápio)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60.89581298828125,
                y: 2.666656494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#rc-tabs-3-panel-2 > div > div > div:nth-of-type(3) img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"rc-tabs-3-panel-2\\"]/div/div/div[3]/div/div/img)'),
            targetPage.locator(':scope >>> #rc-tabs-3-panel-2 > div > div > div:nth-of-type(3) img')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 42.135406494140625,
                y: 29.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(2) div.Flex-sc-rrnf8w-0 > div > span'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[2]/div[2]/div[3]/div/span)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(2) div.Flex-sc-rrnf8w-0 > div > span'),
            targetPage.locator('::-p-text(Sugestões)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47.33332824707031,
                y: 4.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.react-tiny-popover-container li:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(/html/body/div[24]/div[2]/ul/li[3]/div)'),
            targetPage.locator(':scope >>> div.react-tiny-popover-container li:nth-of-type(3) > div'),
            targetPage.locator('::-p-text(Olha o carro)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 192,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Buscar por categorias)'),
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(3) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(3) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108,
                y: 32.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Buscar por categorias)'),
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input')
        ])
            .setTimeout(timeout)
            .fill('bolo');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li > label'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/div/ul/li/label)'),
            targetPage.locator(':scope >>> li > label'),
            targetPage.locator('::-p-text(Bolo)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 142,
                y: 1.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-text(bolo)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104.6875,
                y: 36.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/input)'),
            targetPage.locator(':scope >>> div.sc-VcoSR > div > input'),
            targetPage.locator('::-p-text(bolo)')
        ])
            .setTimeout(timeout)
            .fill('do');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(1) > label'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3]/div[2]/div/div/ul/li[1]/label)'),
            targetPage.locator(':scope >>> li:nth-of-type(1) > label')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 156,
                y: 21.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-doCyfw > div > div:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[3])'),
            targetPage.locator(':scope >>> div.sc-doCyfw > div > div:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 245.3333282470703,
                y: 41.666656494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Selecionar item)'),
            targetPage.locator('div > div:nth-of-type(4) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[4]/div[2]/input)'),
            targetPage.locator(':scope >>> div > div:nth-of-type(4) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 167,
                y: 37.666656494140625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(2) span.sc-eFWqGp'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[4]/div[2]/div/div/ul[1]/li[2]/button/div[2]/span[1])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(2) span.sc-eFWqGp')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104.33332824707031,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31.333328247070312,
                y: 6.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(DD/MM/AAAA)'),
            targetPage.locator('div.gdYClK input'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div[2]/div[1]/div/div/div/div[1]/input)'),
            targetPage.locator(':scope >>> div.gdYClK input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 111,
                y: 37,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Thu Apr 18 2024) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.DayPicker-Day--today > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[1]/div/div[5]/div[2]/div[2]/div[1]/div/div/div[2]/div/div/div/div[2]/div/div[3]/div[3]/div[5]/div)'),
            targetPage.locator(':scope >>> div.DayPicker-Day--today > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.39581298828125,
                y: 19.33331298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Escolha o horário)'),
            targetPage.locator('#downshift-97-input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-97-input\\"])'),
            targetPage.locator(':scope >>> #downshift-97-input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84.66665649414062,
                y: 35.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(20:00)'),
            targetPage.locator('#downshift-97-item-0'),
            targetPage.locator('::-p-xpath(//*[@id=\\"downshift-97-item-0\\"])'),
            targetPage.locator(':scope >>> #downshift-97-item-0'),
            targetPage.locator('::-p-text(20:00)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 108.66665649414062,
                y: 31.6666259765625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Enviar) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('div.sc-eXBvqI > button > div'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/form/div[2]/div[2]/div[2]/button/div)'),
            targetPage.locator(':scope >>> div.sc-eXBvqI > button > div'),
            targetPage.locator('::-p-text(Enviar)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.145751953125,
                y: 7.45831298828125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.sc-ctuRtO button path'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"micro-frontend-feed\\"]/div[4]/div/button/div/svg/path)'),
            targetPage.locator(':scope >>> div.sc-ctuRtO button path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.333251953125,
                y: 12.333328247070312,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
