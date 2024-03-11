import mask from "../mask";

describe('Проверка mask()', () => {

    describe('Русские слова', () => {
        test.each([
            'Реклама',
            'реклама',
            'РЕКЛАМА',
            'Москва',
        ])('Слово "%s"', (word) => {
            expect(mask(word)).not.toEqual(word);
        });
    });

    describe('Английские слова', () => {
        test.each([
            'Ad',
            'Advertisement',
            'ADVERT',
        ])('Слово "%s"', (word) => {
            expect(mask(word)).not.toEqual(word);
        });
    });

    describe('Числа и символы', () => {
        test.each([
            '18+',
            '100000',
            '10%!',
        ])('"%s"', (word) => {
            expect(mask(word)).not.toEqual(word);
        });
    });

    describe('Разные результаты при повторном маскировании', () => {
        test.each([
            'Тут какой-то текст из рекламного объявления',
        ])('%#', (word) => {
            const a = mask(word);
            const b = mask(word);

            expect(a).not.toEqual(b);
        });
    });

    describe('Обработка спецсимволов', () => {
        test.each([
            'Лайк &#9829;',
            'Лайк &hearts;',
            'Кавычки &laquo;&raquo;',
            'Кавычки &#171;&#187;',
        ])('%#', (word) => {
            expect(mask(word)).not.toMatch(/(&[#]?[\d\w]+;)/g);
        });
    });
});