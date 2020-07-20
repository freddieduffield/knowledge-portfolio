{ # try
NEW_RELIC_APP_JSON=$(curl --location --request GET 'https://api.newrelic.com/v2/browser_applications.json' \
  --header "X-Api-Key: ${NEW_RELIC_API_KEY}" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "filter[name]=${NEW_RELIC_APP_NAME}" \
  --max-time 600) 
NEW_RELIC_APP_ID=$(echo $NEW_RELIC_APP_JSON | jq '.browser_applications[0].id')
} || { # catch
    # save log for exception  
    echo "could not find New Relic Browser App ID for ${NEW_RELIC_APP_NAME}"
}

echo $NEW_RELIC_APP_ID