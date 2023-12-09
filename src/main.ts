import '../assets/styles/style.scss';

const resultSpans = [
    document.getElementById('years'),
    document.getElementById('months'),
    document.getElementById('days'),
];
const inputs: HTMLInputElement[] = [
    <HTMLInputElement>document.getElementById('year'),
    <HTMLInputElement>document.getElementById('month'),
    <HTMLInputElement>document.getElementById('day'),
];
const submitBtn = document.querySelector('#submit-btn');

submitBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!inputsAreFilled(inputs)) {
        console.log('not filled');
    }
});

const appendTextToResult = (text: string, element: HTMLElement) => {
    if (text.length > 0) {
        element.textContent = text;
        return;
    }
    element.textContent = '--';
};

const onSubmit = () => {};

const inputsAreFilled = (inputs: HTMLInputElement[]) => {
    const isFilled = (inputValue: HTMLInputElement) =>
        inputValue.value.length > 0;

    return inputs.every(isFilled);
};

const findInput = (inputs: HTMLInputElement[]) => {
    return input;
};

const errorMessage = messsage;
