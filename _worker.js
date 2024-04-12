export default {
  async fetch(request, env) {
    const _url = new URL(request.url);
    _url.hostname = _url.pathname.startsWith("/gh/")
      : "grafana.haochenmc.top:5443";
    const req = new Request(_url, request);
    return fetch(req);
  },
};
