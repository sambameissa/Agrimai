// Configuration Supabase. La cle "anon public" est PUBLIQUE par conception :
// elle peut etre commitee. La securite est assuree par l'authentification et
// les policies RLS (voir web/supabase_schema_v2.sql).
// NE JAMAIS mettre ici la cle "service_role" (secrete).
window.AGRO_CONFIG = {
  url: "https://wfmuvhrutgyegiwjumtx.supabase.co",
  key: "sb_publishable_wO5k_FNq9LGxkIZq3S1hbQ_AvF-wBuK" // Supabase > Project Settings > API > anon public
};
