---
layout : none
---

let Site  = {{ site.setup | jsonify }},
    Staff = {{ site.data.staff | jsonify }},
    Work  = {{ site.work | jsonify }};
