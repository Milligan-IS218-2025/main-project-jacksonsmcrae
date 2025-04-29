function GFG_Fun() {
                var down = document.getElementById("GFG_DOWN");
        
                // Create a form
                var form = document.createElement("form");
                form.setAttribute("method", "post");
                form.setAttribute("action", "submit.php");
                form.classList.add("myForm");
        
                // Show alert on submit
                form.addEventListener("submit", function(event) {
                    event.preventDefault();
                    alert("Thanks for building your arsenal!");
                });

                // Create a break line element
                var br = document.createElement("br");
        
                // ----- Ball 1 -----
                var ball1 = document.createElement("select");
                ball1.name = "ball1";
        
                var placeholder1 = new Option("1 Ball", "placeholder1");
                var option11 = new Option("Purple Pearl Urethane", "option1A");
                var option12 = new Option("Black Pearl Urethane", "option1B");
                var option13 = new Option("Pitch Black", "option1C");
                var option14 = new Option("Zen U", "option1D");
                var option15 = new Option("Tank Rampage Pearl", "option1E");
        
                ball1.append(placeholder1, option11, option12, option13, option14, option15);
                form.appendChild(ball1);
                form.appendChild(br.cloneNode());
        
                // ----- Ball 2 -----
                var ball2 = document.createElement("select");
                ball2.name = "ball2";
        
                var placeholder2 = new Option("2 Ball", "placeholder2");
                var option21 = new Option("Pure Envy", "option2A");
                var option22 = new Option("Super Cuda Powercor", "option2B");
                var option23 = new Option("Ion Max", "option2C");
                var option24 = new Option("Xponent", "option2D");
                var option25 = new Option("Jackal Onyx", "option2E");
        
                ball2.append(placeholder2, option21, option22, option23, option24, option25);
                form.appendChild(ball2);
                form.appendChild(br.cloneNode());
        
                // ----- Ball 3 -----
                var ball3 = document.createElement("select");
                ball3.name = "ball3";

                var placeholder3 = new Option("3 Ball", "placeholder3");
                var option31 = new Option("Effect Tour", "option3A");
                var option32 = new Option("Kaboom", "option3B");
                var option33 = new Option("Phaze II", "option3C");
                var option34 = new Option("Reality", "option3D");
                var option35 = new Option("Venom Shock", "option3E");
        
                ball3.append(placeholder3, option31, option32, option33, option34, option35);
                form.appendChild(ball3);
                form.appendChild(br.cloneNode());
        
                // ----- Ball 4 -----
                var ball4 = document.createElement("select");
                ball4.name = "ball4";
        
                var placeholder4 = new Option("4 Ball", "placeholder4");
                var option41 = new Option("Black Widow 2.0 Hybrid", "option4A");
                var option42 = new Option("Ricochet Pearl", "option4B");
                var option43 = new Option("Physix Blackout", "option4C");
                var option44 = new Option("Zen", "option4D");
                var option45 = new Option("Max Thrill Pearl", "option4E");
        
                ball4.append(placeholder4, option41, option42, option43, option44, option45);
                form.appendChild(ball4);
                form.appendChild(br.cloneNode());
        
                // ----- Ball 5 -----
                var ball5 = document.createElement("select");
                ball5.name = "ball5";
        
                var placeholder5 = new Option("5 Ball", "placeholder5");
                var option51 = new Option("Ocean Vibe", "option5A");
                var option52 = new Option("Piranha Powercor Pearl", "option5B");
                var option53 = new Option("Hy-Road", "option5C");
                var option54 = new Option("Zen 25", "option5D");
                var option55 = new Option("Max Thrill Pearl", "option5E");
        
                ball5.append(placeholder5, option51, option52, option53, option54, option55);
                form.appendChild(ball5);
                form.appendChild(br.cloneNode());
        
                // ----- Ball 6 -----
                var ball6 = document.createElement("select");
                ball6.name = "ball6";
        
                var placeholder6 = new Option("6 Ball", "placeholder6");
                var option61 = new Option("3-D Offset Assault", "option6A");
                var option62 = new Option("High Speed", "option6B");
                var option63 = new Option("!Q Tour Edition", "option6C");
                var option64 = new Option("Sublime Focus", "option6D");
                var option65 = new Option("Evoke", "option6E");
        
                ball6.append(placeholder6, option61, option62, option63, option64, option65);
                form.appendChild(ball6);
                form.appendChild(br.cloneNode());
        
                // Submit button
                var submitBtn = document.createElement("input");
                submitBtn.setAttribute("type", "submit");
                submitBtn.setAttribute("value", "Submit");
        
                form.appendChild(submitBtn);
        
                // Append form to section
                document.getElementsByTagName("section")[0].appendChild(form);
            }
