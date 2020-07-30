use worp_dice::expression::Expression;
use yew::prelude::*;

pub struct Playground {
    link: ComponentLink<Self>,
    input: String,
    output: String,
}

pub enum Message {
    UpdateInput(String),
    ParseDiceExpression,
}

impl Component for Playground {
    type Message = Message;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Playground {
            input: String::new(),
            output: String::new(),
            link,
        }
    }

    fn update(&mut self, message: Self::Message) -> ShouldRender {
        match message {
            Message::UpdateInput(input) => {
                self.input = input;
            }
            Message::ParseDiceExpression => match self.input.parse::<Expression>() {
                Ok(result) => {
                    self.output = format!("{result}\n\n----\n\n{result:#?}", result = result)
                }
                Err(error) => self.output = error.to_string(),
            },
        }

        true
    }

    fn view(&self) -> Html {
        html! {
            <div>
                <h1>{ "Worp Playground" }</h1>
                <h2>{ "Input" }</h2>
                <textarea cols="120" rows="20"
                oninput=self.link.callback(|e: InputData| Message::UpdateInput(e.value))>
                </textarea>
                <br />
                <button onclick=self.link.callback(|_| Message::ParseDiceExpression)>{ "Run" }</button>
                <h2>{ "Output" }</h2>
                <div style="white-space: pre-wrap">
                    { &self.output }
                </div>
            </div>
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }
}
