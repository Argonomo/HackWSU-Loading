# Setup
$('#loading').data('step', 1)

# Runs loading text
loading = () ->
  window.setTimeout () ->

    # Get elements and data
    loading_text = $('#loading')
    loading_text_step = loading_text.data('step')

    loading_text.html('Coming Soon'+('.'.repeat(loading_text_step - 1))+("&nbsp;".repeat(4 - loading_text_step)))

    # Determine next step
    if loading_text_step % 4 == 0
      loading_text_step = 1
    else
      loading_text_step += 1

    # Pass back next step and call loading again (recurse)
    loading_text.data('step', loading_text_step)
    loading()

  , 500
  
# Run first load
loading()


