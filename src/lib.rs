use std::time::{Duration, SystemTime, UNIX_EPOCH};
use wasm_bindgen::prelude::*;
use worp_dice::runtime::interpreter::context::ExecutionContext;
use worp_dice::syntax::Expression;

#[wasm_bindgen]
pub fn dice_run(input: &str) -> String {
    let execution_context = ExecutionContext::new();
    let window = web_sys::window().expect("should have a window in this context");
    let performance = window
        .performance()
        .expect("performance should be available");

    let start = perf_to_system(performance.timing().request_start());
    let result = execution_context.eval_expression(input);
    let end = perf_to_system(performance.timing().response_end());
    let diff = end.duration_since(start).expect("Duration.");

    let output = match result {
        Ok(obj) => obj.to_string(),
        Err(err) => err.to_string(),
    };

    format!(
        "{}\n\n----\nRun completed in {} ms.",
        output,
        diff.as_micros() as f64 / 1000.0
    )
}

#[wasm_bindgen]
pub fn dice_parse(input: &str) -> String {
    let result = input.parse::<Expression>();

    match result {
        Ok(expr) => format!("{:#?}", expr),
        Err(err) => err.to_string(),
    }
}

fn perf_to_system(amt: f64) -> SystemTime {
    let secs = (amt as u64) / 1_000;
    let nanos = ((amt as u32) % 1_000) * 1_000_000;
    UNIX_EPOCH + Duration::new(secs, nanos)
}
