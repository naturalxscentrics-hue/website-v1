from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
LOG = ROOT / "server-5174.runtime.log"


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        with LOG.open("a", encoding="utf-8") as handle:
            handle.write("%s - %s\n" % (self.address_string(), format % args))


def main():
    handler = partial(QuietHandler, directory=str(ROOT))
    server = ThreadingHTTPServer(("0.0.0.0", 5174), handler)
    with LOG.open("a", encoding="utf-8") as handle:
        handle.write("Serving %s at http://127.0.0.1:5174/\n" % ROOT)
    server.serve_forever()


if __name__ == "__main__":
    main()
