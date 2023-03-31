pub use actix_cors as cors;
pub use actix_files as files;
pub use actix_web as actix;
pub use actix_web_httpauth as auth;
pub use rapid_web_codegen;
pub mod logger;
pub mod server;
pub mod shift;
pub use default_routes::templates::WELCOME_TEMPLATE as welcome_view;
pub(crate) mod default_routes;
pub(crate) mod tui;
