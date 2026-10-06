# ofertadeaprendiz

Página estática baseada no ZIP fornecido, preservando layout, imagens e popup.

## Checkout
- Inicial R$9,90: https://go.fortpayplataforma.com.br/dtaoh
- Popup R$19,90: https://go.fortpayplataforma.com.br/riqixu10kr
- Plus R$27,90: https://go.fortpayplataforma.com.br/31ulh

## Rastreamento
Somente Meta 2137177876923028, UTMify pixel 6ac09772f93d5546a5c17ac2 e script de UTMs fornecido. Rastreadores e identificadores antigos removidos. Meta PageView e ViewContent na página; InitiateCheckout somente ao clicar em um link FortPay. Abrir o popup não dispara IC. UTMify usa a detecção nativa de links de checkout. UTMs e identificadores de clique são preservados.

Purchase não é disparado na página de vendas. Configure a integração de pagamento aprovado/webhook da FortPay com UTMify e Meta para registrar vendas aprovadas. A presença do pixel na página não confirma essa integração.

## Hospedagem
Projeto estático sem dependências ou build. Na Vercel: Framework Other; nenhum Build Command; Output Directory `.`. Configuração incluída em vercel.json.
